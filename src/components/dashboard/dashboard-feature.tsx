/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4iChmq4uiVscwvwfoqmoorxFRT4xYgRg65RC9FWxYdmc8n2SVSwygwsyjnu5r8k7LBRzpwQjnnu4pigFHvmZWzSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ut6ehPb3HVgNoH3vm3GeriefLNbDPHRz5vYK433rn6nWgNGt9PEN4cZd3f7qtvTPR9fjUyrbdRX7fgoQqmej1z",
  "key1": "uu3iRsgEJhdu7c3RMwCKUENysgEVEk8ynfSgntPLanPBs37pND38ttp1ynAYaxytsnHUGsMucstsN3ufxKsECMy",
  "key2": "2LkfhPHvbfi5QLRfpKkM5XSdSRob2X4QcX22NXtYLdB1V9xrVJJUHQKb7Qgx1v53596yaHcVP9AZ5FNiKnk9TGLG",
  "key3": "5N8fj79r79wcqkua2M8J6SRi2ECB64uchofQVBjydpLBP3CGhN4VQLtK1WgvMj7126KXgRjsXw9e5SpEqT9UNLVf",
  "key4": "49kQjnSd8BsJc3wyYtpD4htd9Re8YrSr1uT5Wv49fBKEKzkTdnpkdAcrPuuRQ1CvTWWw6Yf6T6x1JFFr3AAe8LTE",
  "key5": "62cDEKeRdCwcrMGHBYZdW2HucCGmGLEBsJfobd5cngn9QRrynnxWu4vq7QMxCCRCvRw7AMEgbSM9TdLkW4yG3W8J",
  "key6": "5zQhQVyXeDdByzBUXjFPZouXXawsLLaBAkW7yKR2ANAWfLQxuAaThcSbJhUqpQZNFUFjLdhVGrAecMPxXzauXW3B",
  "key7": "47v6pN6USh4gsukDYhzzbKjFUHsXDfzsD5bdn6ZKVAtcq7aypi7ieaczdg3cjdna1rRVcbvMFd44G72y1ppJy8sJ",
  "key8": "4v9EsdyJuwHC4iknwX2G6Dvb2vvWoAf2NUbpZgnV1NkTrTmpwZk84cWirbe6HPCYPC6jYxp5V1sd3JaudsVPRzQf",
  "key9": "2KKTvdXrAj4FtbjDSryoUGc1YfAsrLDtsMFBrxqYXaNd2MyeNzACb3cha3gbkW3HRcXPW2GMfjsG3yt9xNSs2CSp",
  "key10": "QqLKMvh8Drt8kDuoSXCxZ31YEtH3iq1GrrCgPR9HzbbKqQBidz7LWbpm45HdQD8umgz9ZPVhELpB2d8HmgqRhQK",
  "key11": "2FzE26JLQaqyLF9J56VC6t7AgbVBqnipvs53s3ZLgmsG96FP1Gt4wKXEY3B5dhBKuEtQ9JTdP7DYgBB5Gou1ETTY",
  "key12": "2RoGPqRrk5mHELWzWbX4LRbGdfeueaFGvejXD26EHCzbmpAnryorjj4xmUhtF14PXKaUTdedZR1dmFrn6YdhRRX4",
  "key13": "21mZ2V8swgwzxCN7yxxUm8oV5hzUEDRJ6RJ1nREgvAaUdFhRo6HhvAndqTwsYg5WoXAp48JLC2RLSWXLW8avMZTz",
  "key14": "2cPhBg9GCtw59VavNMv3Pjk1n3pnJ2Aid3XHzX6E9vZqYY59E9xT4aVCCdQ9CpyghXMPVEmeNj3cPp1n3sxciMuy",
  "key15": "3CeUsExw63NMYgbGfLb1kRG7sfWBLhWrNi2XuaBQbW8bHsdb9g43GsYXhzyjRH6iREX1M2FYXh5p6JWZix6iyz3C",
  "key16": "5Z2VQsJCnJcgG44ySn8oNAdfAPRPCU72ktEyMV949P1uY6y7wD4RWYERjpnzgkytWRe5M4qkstdkQREyL8zmsfCb",
  "key17": "2Ab7CnT8HNz515BnCXvfeno3K9H1C2jwEeGCEuPPFv94M8vUzunUx2xvbydbuwz26PvsTtpfeYDh49jwtN4hEfsh",
  "key18": "29jJdAHwMy2bkntt3zp2qjFUJmwm6EN5DkkSjEKLtzFsK4VbPRZrFb47218o8BkmnuS3rZxkzPfqh1HQgxdDX5ox",
  "key19": "4TGRYDxXwWg2DbkzHvbjKNGEjdmrhL6Jzxk2XDsPr3GBc6irg3bXeNPTx8eaHGoqycuWPvKMZyHbdVnpaXC8XTrf",
  "key20": "L5MGccki9GEgpJj9AxxnQyGwiZgwqv7QCWwDXyWUBpdp1NkmqEfQ2zUh5mu7sKV86KoDCXDyxP6HajQr299TXtG",
  "key21": "7D8wmhjKAyzVA6cXQvjYiYRR4pU62k8gzcPQPuKiXxAcX2bWCcqqY28c8jbBYFHjEn8ittJMMvcNt8qxWSwhacz",
  "key22": "N9VobzKwA6RncB9ajMTbSudijZFQLkXWJJi7vvKrwxuupfKdp8WdRX5tdypx3ZyAeeyArJkrcT3PttvM46WFnuR",
  "key23": "4xdt27rFF4ru9tL9MdUwwuJZ2rLGM7TXg2Ca2xYE5D3sYqNvy7W36LJTzZ8FZxH1ZfUSYfGXAdB7dcXGGuX5af2H",
  "key24": "4t4jcKNrNkKYSzszqRVoucWoVbtnnqCuK6xuhu2YeGK7hKqBR6c3qGFzhUvw2J3DWHz7xqeZs1SWPt7ZPmiTfJmv",
  "key25": "VczbHRRBU2UpC2K1Wqtu4ikVENVB9aHtNyP4ZPxETiUFKwCY3rqSLpg9akNyh33JD66ms89je7gXsiNPgcUPCpg",
  "key26": "38dS8tbYfSu6xTwCoA8beCgt5mgoWJYGiS6GfFNY5v9GAKrdjoGWhKhbS5SBcHYNTgriXByYFpHD2YSkqiJVfp68",
  "key27": "3WRZJSaWLZtZjr37oQ1knw527baD1UagUs8zxNj199DxUhLd1S1KgwS9zWVh3KksjrDc5FPZY2WzNTeEVrS5HB73",
  "key28": "3e9ubGNq49XXuHb5SDYiXRtT7Qi5oaFd1qfjR4WTxfnqGBvaQxTcJMvNNkcs14K5NQSpjJ3sLXvshCDmfNeRHSqR",
  "key29": "47ob2gHLzGNbwqAsvyp4WxmmqPNs4WVzxYyUsQ6tGvhXTjGYv37snF4K1hRo22S43HvbSBEVYMfMX9uzTMG9W4iz",
  "key30": "3BC9SSW4WTzeDF6q55L76Eq7EfUGXDXEGSUsLaDQLxS4QqYzL9TxXe63Sgq17aaXn1iPZq5Rqf3R84aLnQpUzMyp",
  "key31": "3gAYqPTANFvv94mHnL3pmyG5FjH41B3y15HRXB84xduhcDgpM8uhRNwhWkNbKuvxhhuy1HVnK5Yu2fuyg44WS3Tp",
  "key32": "4dLxvsexxER13c26BrJHskpUDULXr5jFRkcuYqrhMAJhDd6PtPEXCzb7Gha1quvicueeCnzzfGGJoseLgtvtxsc8",
  "key33": "2o5E3An8KrQME2AcG5hPRVjWA2ShMQoXp5TaXZ4oHbJZWsDuAgP14JHeDEd3oKp5dMxJrFpTs9DQcDuzTxJgmpT5",
  "key34": "2F613j3StdgR3haHdaobMTwZqQAe9xJVGN5Q85huisL7CBfyYZKcNr8yT3F4pJW5dNfnZkxRE7wQj3Rf7GzBtAnJ",
  "key35": "3b7pXp5DdgoYefWv2ez4fF7SfcFnPHQT9UEKdESNKFTQaF6oaUzqrc57rYKw7cbgRagRNMNgNXBgbmd3Y2LRzfNY",
  "key36": "22avCj2yW3SWMdRdB7TWXwFCemTiUc8smmJoW5aRft8x8WfvZzHUdktWzut17UBMagFN7SwCgHB6bSsgism4VAtf",
  "key37": "5vkJFbpmjZQcGM7vHA4s6NQq5sQnF7TxXAfXsaP5LTek4kYMuw2G2zj7vjAB1NCf3dBGHWUFYAwbJ89U11s8R8ew",
  "key38": "3KXTA5sw3mFRapAXsi8jMBLg28Td64EwmqdTcQdEwGGMdpbXuMm8di8w3KZJuM1c8Bhw5gNoQr4oRVLG5t12b5DN",
  "key39": "F9ENEWfdoppHBWuR3ty1HaeAsQzDMHr8qKu4nz8878VxoTBisJXMPgetAUK9NNqyya1PWARWrWaVcYpA57tZXaD",
  "key40": "5WiybqJCPyWTEHggkV5t1BhXVnhN5MgdnAcgETe4PxPToGm22AEL5opEkU6Aon6dZ8H5kjNmcq76C1DZLvk81MPy"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
