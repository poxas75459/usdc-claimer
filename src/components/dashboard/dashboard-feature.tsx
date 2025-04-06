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
    "42nCKTrWNmih8MSb3eBK3NPH8EsxyFq4tiHHCVWTs2mUB83zWqmgfbodVHrV2r668ucUPukVepMiQNzvtshu9gyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s9tyNQnyqkoLiHRsMpN1cVVYF3DCusgfDgUqxm3KoKcmADgLDtKQGpWqHxu2JZJjVG9rkdi2Vo9JagdQsioDWnX",
  "key1": "MLLmCSbAEM7FXjxkvpUBkbsPKLYB4r4RhHDcSDNiYLJfjMnZBenFsY5yT3gNPixPC5xWGpf2fCeDWrqtN9BM1CC",
  "key2": "3B1HHjVLWCmW9jyYcxw53ETcaVZeTNhJSX2JzShpQxfFsqzwCQuU5NShXPmNLtkvR1Z8m73AomvLqYocxphy87zW",
  "key3": "3TBh3BHfzg9gxxxWtupy6eyB719EciyHTah46SYcdFKXZgfw21j8U4FAfCNPANLLDJbshrdvNakzJfKHerxQthrM",
  "key4": "2nJshsTgiGXg5QDhB1DRhJoCPad1k56xc279GHFUUTSsZXu6a8S99KV2PA5hBt9uasF2DT6KygthAKyfHtoqEoEt",
  "key5": "3769c7JmQunopz1F7nHU6zC2pmyt6QWQzy2svcK3kGUCAZjnTM9gorAD5quTNRxRF3UP5KEGexen8q4BcfvyStEj",
  "key6": "3doHQ8XUkqa7jmkGSTUvESKpUsWwGfarxMUQ5BsjHHRfxuXafBwnMRpTCpXTQGbopRBpZrU4E4oxFkyRYko3bwny",
  "key7": "4yd7PNjbushZYgTpYG2EUe74QnD5XTUQKY9MSwuPVQtmkxXdfnsmZYb9rMk2HnPFfsazXgzB7dc7HP53kcmQqeiV",
  "key8": "48NujjfGC9yPXyzxncmkVDAFrcHwp576t79ZAfeav7PtjpVd4qn16A9KZNrhaKzdqVLpLFTLG4cUBRKhWZPuRpgC",
  "key9": "52fnwv9i5S1LumxaQGrxMxJTpKCffN6cYKg2jMjrkrXJ2Fcs3fdUZE9XtsAPkCX1CLMJ9P4dHas6nv1iy4cG4Jw7",
  "key10": "4H5xz7JeaYiGHB6rN9Fzku5YkTLEUyYJ1DUDwSeNVJZQsBJRo9JDoY9q6Dov258FEraod2NfvMqSvLwYdkRAHE21",
  "key11": "5BSaiWiZWfmAhjDj8rhvJ5xrWs7iFA8ZwB1HjpoAGVJz1oj6y19DwEjXVFEmeAvxfMdHvycbgWcZ8rMYuSE8kR8e",
  "key12": "5cXKAfCw6wZi3oDHyPeCZFK19128q57WgETgtLmAxCqBqascUjqmRcudMth8WuVPXnYq8rGEGGVxhVuqkpCQp2iV",
  "key13": "4Sy8MHuSj43MvRZ2MKSDp4cGgHQiBL97Cjx4PUL9yVktSu4DoUgmwgLq4Qt7MVnL9e6R7TetwgZS23TDimejJtWv",
  "key14": "2rAvf4Lv7kBF13ytzQ1yewGWZiW65qLRrXq6h7Aci41mygxxo6fRgxNAMPDu39vdbhmBGznCqSU5kiJ5FkfbxSMq",
  "key15": "rJ9qFqJps3WLvsQbViBMb4NnD6TYShRTCXEgwfsZzt7vnUE3enP1gniRAsKHjXtHd3Rzy9yj97Goz5DAQprY5j9",
  "key16": "Pgjriqh5Df1rukvEX3U31oYZyw1jUCcr8zWh1vyuPX1iK4C7LZev2hTFGm387gJjk8kx6HA7E7ko8kLv3u4AzU4",
  "key17": "7yAX1NomdYLfzeVhknHPZkLJnyTuXULLuCwVsfdprkhRNNc4xpckuV66X8ezSTNqLtk3D9F3fpZUWhUcLSypURf",
  "key18": "34gJRAvj93uk5QsZsXKQ1VyWxSKJuBWoKzF2ZCV1uwrbbj3yehKpmBvoH63wBoVfjcKAGXnt1Bk6TEb2Fiy9xDV2",
  "key19": "5wavSQkcFmA6baQ2NL2HNDF8QjLV4PVxVrkudj4vusDyvUtkM2bxNpiNp4NWT8pkkDb8SBQj5UBeQDgqrwdLja7G",
  "key20": "3Ja5seQ4qLHZnFFQGH3Rs6v8pmgwtgMHrVhbGGwsK3HLEhz37qC17KQJTJGoFCmmaPHHjrfT4TXWaQp263D2ZTKv",
  "key21": "2yFazpaBU94m2UN9aGubF7PStJDjt4tnHxTxo7wUL1LnLDJYvr4tXv1qBAgPrV9eUbreHm1dsUqPjEXSGJtaFdi5",
  "key22": "59ifvBGyM1sYUgP81ndRj2reFwCh6pRR9LxgLB9pVak2uqjnpuYMP6wZTxXbURJ6U6oC6HF3K3Cm15La2BNDJK2",
  "key23": "wcNmo3CknMJZEJaUtG8PDXJEspWN3UAodE61BPQXkPcy2MDxpeB6rhwXQzjgCtdpn57way71rRCETnjkQA4vxyD",
  "key24": "5VsxZf6N7oYpQKdXvWGXiUcFLFPHRqnAoTDHEQhNEtgvNSsCyfr1FPfuy4hzHJJJxpBEiJDNscbAtXyzDZwoJJ8u",
  "key25": "49Xa2rCGN9bx8jUU66Dtu1vmwqyTkxTGrfDPL8PV9rKZFrATU2uER9L4ae2ZqxzqjSTr7TCved95d4pTCRHy3Au8",
  "key26": "2UqZc6C9muRkiqF93UECknR1oGhLA51gq4V7awEheJxYyGgGGUBPYHaXHtcfqxzqscJUMRkxnFo7L7UGb72BM4Ed",
  "key27": "4V32yv1NKEoLyVMwKHTxJT29b13PUKGLXGcNyzmxwnR6H8fv6garqrNRQq55k76SqLGVnsRrZjfVoAxNYtQw2wrV",
  "key28": "2uCNffsPkG7x1Xdb1iQUbvhzhxaRnj5iSBL4am96D4gXCo85XWQ9MFUnz7FGseL7R1ZSDcCSFgSn6FpM5WyGmKde",
  "key29": "369tq2gFHdMuwb1PdL7PwAtbu7sSQJhJQV4pSdrnQ7SMW88EjQ2JTQ66Ruuf46G1KbLPez2jQqknHUdaVs3demCR",
  "key30": "5nS1omYTi5ErKXtkSWKFbwnchVtnhqL6GXf39pQG5LEcdNdT99gnq7sj9Ygv49Bsm3W2pcDE2snujLdgmBAFwq7u",
  "key31": "feqNYd2D8fHQRT4Ym2P1uqwePGhRDLuJHgbVb9atDRfMb1zvqMRu52SvVbWb58MkryH2sZf4asizeGPgh38QmVq",
  "key32": "2FCaJwXF2MRyQsy9poeRiCN9DnkcVNScjR7vfqjDA6XqJnoiGEbhj3LafRcsQAq3qqcVX5ipMLzAg6ueu6D8HZX1",
  "key33": "2ZEjETWGFTvy2vpcWoRbRRVv6y9m3TSoHBihjyvB47K3MWJVezS5H89Fq7dm92BuppSHR7AzehpDwMnam3gaoUTV",
  "key34": "3wB1SsbC7WmhTLCdhWLDtCnKvey1UeWpCmpzvfJCmU3qfY6LEVUWuR6TBddpnRMPxLdLMzkzCBYFdL2e1VaVZ7nM",
  "key35": "5w16QLkBeQ6BaRCbT6i2kdgzVADnk2FEvEjPn4MitsvwHfPmFpamZ37ubUoSZkKH97FPdtcWRupXujpzANNdj7Te",
  "key36": "3sJzHABtUUnxBKdHtm3vg9ZNp7J4QkmC7a5afEYtgYCXfRdytdxCNE7V3pZHPxsVt9jxFeBKB4xdmGccwGmLhAT8",
  "key37": "6VFzywqijzq6fpytkYYDCaYVvmiqqdr68K7wvkLCfmXTvJYCEM4on7uLfcLCgHmHeFH7XydYT3fgi2NjpUudyzm",
  "key38": "AsRWfQ2wEyxd4V2vLNad3mYmRiVfXAestHrH1xiAJjqAXHQeAE2aQ9SiyBhejiC2t79c5iyqJfYx1d5XpCz5hRV",
  "key39": "4VCD2VmuTHF31CGob2tLnkh7PXzv16q3SXycN8hTuYC2fn5YmitT5NUwAcqvEridVVfcbxUddYZGEzPM33LtB93S",
  "key40": "2VYtCfGqkMN8p72QEwjAep2P5Tnyth6wFDkwmvs4jjW1BCFwDhLQ49ueTukNoU6cBFWYaFSiDz5hy6wma64PAiBd",
  "key41": "3sdZ5rswjo1eMBjYhTpNpBZbvznNV8vhd6XJo1bxjLrYM4v7cmk525Zgzgvt6V8CTResw9qGRdUTKgC4wUgZfrmx",
  "key42": "3RgQLf7Zg3BJscBKTrCUPHrsUTpJEyefWZWJVnXYeCDHYkoAZ4iCr5qx948MnWNiUuZiUKt9rqSLnvUZSHQiZNfm",
  "key43": "2Q5NrACbHdhKrVSMjA6vz511vxoScD3PHWqAVUnk2pLYMfzqhxLnBUgPw9aZH9aXo9F8Ei8CwJPygXWCaUN7izyG",
  "key44": "fpTJrzNXNb32DknkaYDG94Q9pR3jZu5Vbgepepoh2KmPTXTxV3sJgL6Vy7SeFhdFRMDyPix69dNR55JjAHS4LGK",
  "key45": "3SJsf6iTqXQBaTsnt1PtuTYBrrFjahuTNJYzkXz9zA3PeHydRxeQKyEK9VmGBbhoiFNZW3tYYt8vufoD4EaZnUgo"
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
