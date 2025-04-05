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
    "4r4oDmWxgZCzCyUo1tHUhd2hT9WBMERQBG9Vx4HSBq6WGMGapdPPhWcmo3cMQa81mtsFhJvLDxpmqf2cxk2b6daZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jRhr7SinUmwS7HjuUNddqFi3SCpfysYXfDjEhrgQTwhsy68XYbpr76vQKsY8kfumUXSdGBxzkLxqnKN8o939wGm",
  "key1": "3qQjrsu5Wm9Hisgu1dNCAP6nUQmUpREbz4aM4CJN1HtK5BtChACkFPe23NZoxH8K9ifddD6Lm8Ywf8NbNH1p5hWj",
  "key2": "4qjtHZ4HviAa9UnHCTbEYDeoYutuAwQNHbBnnpvKS434ZGKXFRvKhcuWAB2bTsvpw3DAVb5GAp2HgeMrWFcKFdeM",
  "key3": "5zpUmjrMDa9aF3JFFCY6zSCbqqp7c3JNW9QsgxAE2Bf9gG8HcDxJfJRmzyfFb4N4WHUpDYgXYMpc2fC4LPCoFnJT",
  "key4": "41ZjTtmJp1BWhYVjVSDjtUALcoyWbGsdfHtFQwmKrbCZUMvP5UvTM7W37eqjQGsSivyNWcgmaaWfmnubezRcdVUF",
  "key5": "2Ynm8We95K23hTChS7nqCJAEkcdvf4VzBarqFSnKzad4hxBLF68EQ14QnAGrQ16aapFAQ2yBao6YjACphPu8yLH7",
  "key6": "5qXTw9K5Hniz2CnsizLjfpQXpt2HVzUo2mzYQCtimr9smVWWwN9HW47K8wuWt91BPvTk42TnwnsGRnoWU3rZEcu3",
  "key7": "2Uao9wFENHSggmetukQ9VdGuF6ka7wM2KeC2ZVHn1dnQGWDjwsLTpPszRYY1KU1dTxz3pdAs3SsApNzga2i5vmyy",
  "key8": "41pAnMd2t2Jps7A1HW9WNDktuYV3bhF16c6ZGJh3U9AdkZ4SxgmaavtUPPX3apZRu31Co5dYoMvuWswwFXTSwg9E",
  "key9": "4hnoSH1ETiVSgF9vrUyPJyui4oLsbCaEpXRBP9FuBub7kJKWpa7oRZxEs7VBQXGcgdkqojCuRmCVAu7BzPgehgUx",
  "key10": "65Qq6MRdzX6EGscGnn48xijQuUuVC5AkhC6rUQYMfzB3yGuMXskdgjLTGTYhz5Vun637NvhWpef1NGW2ZPxKGMPG",
  "key11": "GMrau8RiugqP1pdVXNXafMECXEeZErpW4Xipk4q1yCpwxL8yAaz5LzTWPzWzdumEtTKH5NHUr8YjGGFiXVeD5Jz",
  "key12": "3x1ZSpamhdJnWZmf1bu2WJvNcUvRCVxEiqQhPtvpGrpcwNfK2JCTT9ecpRR2cc16x8U7iamxVsUkwfzoLUSiZoez",
  "key13": "5wx83xNCGfdBqBzWpsYULp5tDttKCoCSokHoCALftHZTziFRTiWuP5aMmwTbazVnnc2wmjVB5L8C1VbAGsdJWXXJ",
  "key14": "5UvuNQsXvHk2rkYZkaGwotSR8os8NRgMzHN7FhjDSNiTVKpq4HdjRY18uxuqzV75zwjgUKG6uPPAMRa9wrxTKqMY",
  "key15": "4bqstHiFJAfNdmbATbmqR9QpbnYpuj6pSu6mpge9ZtsekiYy2NZVVB75CtmwfJiyXy9q93jijxwxN1YNfKfTmiUD",
  "key16": "5zHqxk8DZfHxc9tenx2MFCCzrWoWEKvENbREgSmoW6DJQMY3j7qKQBdF8wrjfGxmLsy22Yu7ipcLLnfQWa94QuUL",
  "key17": "4z6otPPfbo4Duh9yQAm4KmM9UdN4LqkGZ3FeKvda6yvBRekxVCNi7jn6HhmCtPBndPpRcu6Zf2SNmWJBGGxpqo3g",
  "key18": "3Lufo41mC1rBur9EY7cGBAjX4RCLBJ2oEsKP3AEYVsYKXL5xJ1qqKBD5LUac8nCZXLv2wL2fNmp7BwufUpxmSU6p",
  "key19": "h2W6DAAQ3XE6dofmePfe1V7AyFDUAdhC5aZjzoy6sjovUbykchydLqhHquHhBhsr3HbKNa4D8WHJDptxUTVVigA",
  "key20": "456j1FXCmSzsV9TNgVX9LYUAbCcGfDw6KTHuWhoQdNCuc4tTFdHtCMW5r4SosauJWJSEhWqa9VpMSGWTjM57ps86",
  "key21": "5jptwieuZiA4QssJFtaC7X2aKezThrnTA9fv5MRRGrbj7mhYDtjJsPP7fYa2bQtf2NweCoWTYVhtktjtH9kSSuPo",
  "key22": "57cQTqjEG9ZoSJGvaZJgiYczzGr15JLQZPnFpDxsVAaWno6C8zkYR9c7optEEngovB8oUQjdDtwrjkB8goiUn2P2",
  "key23": "2Y7EWp24tJ4CDJCEWXxDsgPbth2RXdvf7cDey5rBDH1f5kuJuuEGWzTkJT1JiBzNNxd7xq7oD8nbH3Sp2aXZhDvC",
  "key24": "2xhE3HJpaR3nRSnPfFvWYqgqVhj3Qky36WsVG8xQhdkTgW5C4b1bAJXx44m8vLFXvZc7kWc13XaEBLpAzkyvhEjo",
  "key25": "2iAZ8LfEvVxjxdouF1YEJLZxDT77j87aQkzVvhrS3eMWvR56kXQZ66FxSSTBdQ4RYX2SboYSdREUSSArH6ZQz69S",
  "key26": "27Uyq2szqN12ycEBMiZisJN3BpvQ9t5DAV5jVL9C348WjWqf2vdh2obsnMBb5JSWqWMGToga1fUo1hDrB3Ugv7Hx",
  "key27": "3Be8P9G5FLqd8macDYfJVfKyqnWber7iZS7pAQzUm6RqnmMyJkDQ9iBvj8vYP1bXhDCjXz9PaavqvmtjsYKvg2oL",
  "key28": "5y9drPAxx9xaMnqh5FyxCcmLUCLHShUVoyPytfZk4vfXDLgABpVb5pyE8X3iVD6B89eqApNFRhSAAQBAhcyN3L25",
  "key29": "3BxrUSwwXw3FY7sXATvzD6kuXuMJq1ABotYgVDMrPTdUp6hVqYbdzYovReoLFMZHUFs8vdNW6DZ4TKyThFZcdGza",
  "key30": "3fPUdMGuTBVvbn5aAfuwuHR11zQ3Cpc1ag2Dv3MFSU1apsgBwXtjH7pq2TotyNK13k9GLBueTFhDSS1RBRKLi41v",
  "key31": "54CN1FXwKyyagDXdKe29c7JL1E9mL4FG9zQKu913ngkortqQkTCeKjRqoiNLTYvLppMTYBawMposhHbkCcrXo5Lr",
  "key32": "4PYuC4mNpwkZ3NyRTWf3nJwRsQN29CsGShhYPuZZmVyvfj8HQHf1UFuaV2TLeR9N1GBxgtTv1SXZEi2MFbkAius4",
  "key33": "4rg7cbrqMcTx4mas8g1tXTyqdkPjRQX3pJzZ8yvDgJ34Egqxnno3Q3SYDnEjsXhXBskxEgu8YE1pd13mpYueHxX",
  "key34": "4PHdJwDndNgruqKDzDapRhnWzEo2XdGHfAJ6ym6adD69dTuefzKF8sNNEmQ1Pmkn7eejNxwtkxn2Huf5gXZ1ApQQ",
  "key35": "3hsZZPtDAFvKADn4R8wQZxPMixayFdEKKUsimDp16xUw6tcuHJXzjf8TB9hesEfbC6knXbWLKYPNgtdr8r4o48Bj",
  "key36": "3YdcUqp8wftJXoAeCDX1TW8mvSMbf8sE7arQszQJ2RUbipFHZNUEaQETkmC3ZMJ9CgWw3cUbCJKfPY5p9AiCGw2P",
  "key37": "3YWoCGWNa158g6gNjPoeQopnkEDXw2rNbC32MG9ue1rwVS7rdxsf9PasUiDWf1HpSq15xFn6gQphXgGKupQ8ihdh",
  "key38": "45uP9uyPqW71TgS4AmFKkEoYqokURfAfC5AcAEK2Y4qmoHot6yzWJeyppH8SViNY2FbPpJzFMwJGKBTkBNte2vNs",
  "key39": "2kxbNT1KW4wSoSE3zrBZt77u3xUGDgcSCksorNDWWAt1HmB51p6uvmXf35MpcfqYkojwKaR3ABhvvv6NhxbPU88r",
  "key40": "2MjWg9xWrGx7FXCh8nnUfnsk8FitHKqk4hNx2Gi6LvhLhnjvG7ThKWvDzTsY49XoA3PSrYThnrPdDMFfSZy72hdk",
  "key41": "4fyPKu4x8SgpcZyYVJLfZDASSDqmWdHPCRrZ8qD5rS6YACrEzLY7TckuPokoNvVtpGiE9kZ6EMcATbWSRLK6YWA1"
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
