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
    "3ijtqQuWs3v4pj8Zn6Lp33BvtTTv5XDsuN8eTtbs9iLUgz69TP9RF72bq74Y4EAtjfHbj7z1SFwMjyn8MrfnVgvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sHctmRMGy2jhQ3TbzXL8xKCHHbLURL2xyzTQMKJVx7P3bEMikbt3m6pCmfky6An7qMnZ455uMaxHfP4ySoojyT4",
  "key1": "5iPfLz4QxDhTc3CpmSHMfwcXVx6rJCtUtoMqW3fnyCcSbHzjys2y1dffu3Eoudga4bzsEzf6pEzZWu9i9jBxAsPE",
  "key2": "Kb3V865VY2a8t3WijUX8WqvKEqgtazqtmasKreX3chCaoDXTdyZRaG9v9EspJHKvzmB1c8Zgph5wZAKGHrCV4Ai",
  "key3": "3Q1W4k2xK1HMxLzzNx4YabiHvg8YiSw3RfJBefsZbb3RKfDEr43dHi99n173XJEXGtJxTFfHXuUrXTVgs5eorDcA",
  "key4": "4Bu52hDfNWbn5auvimt1rzX6e98No6gwvWMpuG26GVpusF751b97q5jQFNm7yBJqnYdbYf44QHibgBnbjMVpFvN7",
  "key5": "2BdwX6r57C7Ah2Yg8pWUEcjqM7tuGa5VuwVULXg1PP9y4bjgUokYYLPJyDJ9TFbYTnjPvrKAr3irDdEabCfXjCe6",
  "key6": "5VWN8yRRAh7ekcZagNHMzieCNLRnpP2WR3xgJMoFHpkaKgojVYqMbcj8NsBRHDVGLFmi7ktFUFj2EYBVp5pZn49n",
  "key7": "5JvPcA7mHsnSRZzLfkDGriEEmm694SppzUpaYt6WSWZ9VqmkY1UzB4HSxrvzRns1pW2M7zrY8xFaGJUpRbPTwYZv",
  "key8": "5YfkciksE4bG2nvS1WRxih28M1AN5LFoDDevpw8Aev4VaUc89xRax99fTM42JBxUTXxWy2CGgoBXxW3rXEWmGUDs",
  "key9": "3SgfhsDogGNubHHFUhmyS1BvoAm7xAMb1fRyhyiL2gunzcEmtZcr6EyQdfT7E7qPEFouTGEWnjH8JffaYnzXnSv6",
  "key10": "1HhXZiqxPAyoZNdS1TwQHtcmoFyuh1PTzxJDTsQafJwWEHVTXYZG7h7b4S5zcY2Yj7RTNUap6K2H31UPW1yN9mN",
  "key11": "2wsaVk96YovDTPRMGDGMejU9f67A2Qg6r1gPh4pHS5a76vroi9sfZ9TCyLwKiwYTphkLV94TpbNAo2DLLw5kT6ds",
  "key12": "5o4MD1vckpJ85xwLKZbxAdojwS8VKba2RSMe9B8CzdfRj5YQwKhDiHxu2P4WZMJ7TuhXp66gwkQUUXCMz4Nbr9jT",
  "key13": "2mzCWDhE5PKxQz967LBsaN6WSrTNa8exyBuQCtmJXZZ7LpihjvBrGtrV2JUk1xPzDpjhm8SXRu2kJ9BpzAJfUtyf",
  "key14": "4Kr2pSgG3grFaCFqyGfAfwuhUMQpapqobrYcaR85gT4BDzyw2ZPk41WXD2QzEvEoZyuMMdLTYAByw1Wx69nnpVja",
  "key15": "5Z3wNnrVDg6gaNKbetzB9VyCkTRxhye2z9d9VvjLhNboXbquptfYHyZ1P29wicpyJHPJjaRjTwtJgTqajgqP2Ww1",
  "key16": "559Xaf1By4oDACvCznkK5zYsVcAknrVCLPNsKq6P256e8RXiDkVP8yj18JVfqhPK5tbpx85wjU7R9b3rGgbdaMg5",
  "key17": "5WukBiPzLUW4SkmGvBYodLUXd8X4Ar4wL8qPXEMCneGma8dyKyNYf6xSJbXfmDckvPbK3gpcFQXe8d5VY9j9zwxR",
  "key18": "rpVJdrnaY4649SyGgBS2b1muLjP4WU62BAt6URf46yL2DTmwaGnVqVRwZ4iGkP6Xt5VT2vS3NQFgPgLAwhKznn5",
  "key19": "3rKJWYdusTZXbvcpHQQsyvQgx7sdNHHVdEwTvs2ecoMKLtnj7UeW4XNHNMUDdWiRv3CtTRr9QfUi1rFe3kHRjHRM",
  "key20": "2chabfzbU6SjifqFhK1fSMgU6mQJEafwXMVRw4WNhVEMH4tB8v5NtuRKoAJZ9ZnPHCuqgWHr9YPU5TFEKK4V33dg",
  "key21": "5wCwsWqoutWDbe61kxajYgqQFaYiCsMnVHzGqkvZ5ch2nCPJ6DRqWPr7HcpK6kA1EEuHDqVf8jqHQLTE7jFqcTNn",
  "key22": "4oMuyFV7Md9cmR9w3r3ENXxjjU5dZdvUTefRTTWRADY61Laj43bRnwihS6wM53kh3LW2SXbc4LdUc6cb61ca2zN7",
  "key23": "ivCapVvk75uFkb9PRgMKqwmPxczSGHPMpq9THSPSQ1ZPXfFMQv8v1NPme4uP1i84grAuumjqu6wKCNrbSAfWwgb",
  "key24": "2mcfsuemu1r3ekRP171r2NAvdZ3mr1TSCu7188coxqrXafzfQAjRRG2ULrthhk5gDScduPyGANmLwqH9YDhjXJwh",
  "key25": "2Kar4GqQDkmoJ36Lec7GoKSh1BP9GkfzXvy8yv8oMWxFV9UaruWtySj9V1usmHFdYJLoTSQDF3j7pXhZqNEqvvxB",
  "key26": "2wnA7sdKDkdAYxSNVA2k8qAeYUxEDqg2P1TjPHBgpxXxfWn71A9TA5NTg23BxgFb1tSMhrpf2BvovkcqbHZPAVYw",
  "key27": "2zQ4AuuQritpfLYEScgwQ6656Afqn2tbDn5b8hFZBRRZmQX9seJEkdaHsKdERj39Pj2iDa3xiBiWvn7LnK4WU7Fq",
  "key28": "5KpXJ58daXeRvWskXKRe7z2REKrJrVDZndjvdahZrpjLqncRoK1MJJAkCpnxSTHbtbhrynsLyTm1gg42Xuq3HKNU",
  "key29": "QLS2PAGZYU2WvZHZL2HmvsHu77vnohrsfvrcNep5uz6x8UNahmMSkr8MwJG2LvAquf1nCr1yZYWrQsT8sF1T3Me",
  "key30": "4qNR1k4YLzAo5To5RRgWRfyixYcUTJGQgD8VuwSwZf1ZBHZCXxBySx61y5FKeQhLyqRr2BVTfFPq1vW6T3WFY1ym"
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
