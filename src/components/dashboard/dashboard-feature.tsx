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
    "5kuAFNFKEGEoneQjgyegUHc3JM3uTsL41iLasnF64L5a2s67amYVtS9k6DBnQyfCm998NnD2HhTBh98drD7LKLTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tKiv3PbSvGWdfNiXt3zLmBnp7fridBPTSvAgA3McC6VgFiFcqf2AztRQUz1j9RQavQG9uz3oRXeMoQWsw4fLjzy",
  "key1": "y5dYQsUfJ9PcfSFjymrNtqLrD3ePUmA9aKKcJc62Vr6oNJAYy3FNva6vqPHv5dzE7RTgBFXenPTYiDLsREpDL9k",
  "key2": "2bVgXMV6q3d7eu9SsLPZueNQLDNk4R6xdhQGdSE8DjfVqq8LoeHED6hDEDH1ZsWZ3yUw9wANPigEqYcWWfvbKavP",
  "key3": "39dqmAMg6iCRovusvf6jcn8xumaER9fbpkLCWTDZ9e92vGmMcKhqVk142dVRChgq8c4VLGdUv2JwSW4j3Ye9xmv7",
  "key4": "51utTbGKznmHfEcoKR19SN9eKRqwcPCxD11NgqRsZXiFRXuPdX7R13DFDJqsqAohEeqvQdenoEj3uEhLuwiYHK9k",
  "key5": "46Hdeka6NjjiX6iEz23bYUnNNt9RVt47x9WjDgV2qbTrQUaq5upEAPAJitXCQYyxp4AoC9W4KqvsyYPdLmoBdR5r",
  "key6": "3JAJzGPBDnouTyHiXsp9wnPZCyutJkWTw6Gj85Fn6xnFDCp9qmNhs5mUYMS9xHysT3jthCcfwWfAKnHAaJBtC54L",
  "key7": "4JWRfeE3Cwuq3TRdnQUjfR3LG2uuwEH7763JRDB7kn6VR3YFCdu76TQ6KctRKVppDuQQfDXjPWUVYEn2dRFbwQqq",
  "key8": "4cKy1umrNeTKBa1VFDMMnZxVTLZiFQGXoqD8wo7yedLvwaSkoZ8sRXC9ErhgyuPzCPc2um18WK57htbRCjUMPQHn",
  "key9": "5qhm5EefyWtLMyRSx9CuS1BgGKYN9AbdTY88dGG6ZBMyH9NM4gE1UT73LrSPPa7x2QhAKi8cyz4ckAAC9j4KgS11",
  "key10": "3WK6yA9avbL1mqq2CfN4sM3foGBT8cMcmjTRuUt94HW8y5U9rVwpFfyZzfykwFJPzC6TcCi3etrnFjkhswzTF8ic",
  "key11": "22igaVWdeZtZnkcQ9NE29XSzBEgLzXX4o5s5AKdcmek2HSknt3fX1oskekMugrahkCjt1RGREeieGpXaWcEp5TY7",
  "key12": "2mzihjWwJcns1XfnsyWyG9dQ3jBqymouKKA3bBkyPYhemHSv25YAX6ba9W2RLiKZ4EU3ZLN2x693ZJRfu1QAFWbD",
  "key13": "6aq4N1gtHSEvoxjzwZNgKnYQUwiVj21mLQHFGuiikmDMhK8ZrUJMdWcnBgMWTQGkpKArtdttRNBaZNTv7ULvDJd",
  "key14": "bDZAMGhcYHEcrpKiEMzotjZw2gW3hxB9cZPpy1H8vdvb4pMAz8kR3nMmUESRUDk6v32Dnpsw2jucrTrnSKa7Mu2",
  "key15": "3YTGAcsAFPDEwczZfD6RjiHXmXG3aejrtAW9QtdmLT6HUvYfRSsrbyphm1b7ETASpxwoKhypADzhPVknPSNtShMF",
  "key16": "3Ym1ye7cCZZBWQ7Mtr3Air2ULnyFd1gKc9pTPntNMVF8ZMgJbMcZ54i84Pz92VUTrK9NyeFGbGATCzfvcg6AE5iV",
  "key17": "2eZsnSVFwEsyJ8VZjHBZ8VFvTvfDVgHrXuT7jKRjrZUZmp5uTMPoG3GkLx8HoBa5qkco1iA7FTYaib9FMD5UEcLs",
  "key18": "Nx5NxuQ93SqttuipdnjmGqnKZyZ71CK51NV2xDDDxhPGqAJpf8wknXZj15w6aYfh8ULFtBVdWfw8TwyfB4LD4Vy",
  "key19": "2gsfZhypqqq91SFbJEdgPWcCi3AohE23PfezD4L49DxsKf6E8CtQGXL6VCaRWVfYprALo4b15jfmPjMKZxGvcaGF",
  "key20": "3LWXxgxU6a3qDZURSSfrPWo7J615hjfYd1ZDyTSMVd3JV3miMHK6pk1tv5ZbWV1i7Ntef9G2fjKkK3sMgLo6PaS",
  "key21": "3edw4t1NpjskyNdimyTYDFV56z9Fo1VszYjD9NpmgoXikqbvPfAcZyFdkqhSAGV5y72udhiT2f78KNiYjk3STUue",
  "key22": "29DazBYy3wsjWiQ9MCvnpJr7K5enSZu91jUHApZRjsgGGfBckVZHzrfoRKr9THfFQuaefUczS8Mbe991FweBBNwP",
  "key23": "4REHF5HjPb8kHNbu3WthPzhv3xU71VLdbmGnjHWvzCFFpFkpm5RQq5XQazEBK8zCeybp4rqyp9s2DyhGZcGmTVE9",
  "key24": "4rErrmCi6Zi1a7e969Hcjx8awuBnQtxbg8Mt6NKdhoFmMWiM1ddk59vCxwfsCKbKx7jUfB1buPgr6SaPGyLijka3",
  "key25": "X5u6grXT2eZm7jotg7q3MbY3xiZ8wwTKkfKnCiYiuXdiuZQB5JKeokmtGUQBU1tb9mZTYKZyuZVTJFriu3fvcs3",
  "key26": "Kem9j9fe1zbYFLJPKbQJig17PRcbZtKuZpkPcYrS4PRotWrQoz1mTDPDB8jiJJ87jmtuv8nKBqc19JBzJTpLncY",
  "key27": "22hbr85coRZk29owitMxRJ7AVXQRMaSTAiEhgqibu5ujkd1RNVUxZHVa5JvJLwSVDxBmPZKLpX1nPj1pU9WpCRB1",
  "key28": "3Niiv477qgQv9ejYbLAE3LdcboF19u9KW6eNPMkjWCZ6vTVQnYCcuDseyc1f3DACMC3YiD3ZiDQevLA4ggbmcQrM",
  "key29": "3GGz1KZ225baLJcBw1sMQwnL3jurxsrPZRQ9DkwBw5N6XhcmjYV9ffwz1E2nRm319knBtTtXCd8zwPoiy4v6Q8zz",
  "key30": "2tGeeG7MDKW7eG4suwUZdpBMgFw46CNARq9G2h7CC6AJBbt3SpyK5VA1VFjEYtwEzmRo5hP3GVWEH1Pfk4CqWAQe",
  "key31": "26bh8yiG8fHStaC5AuKKt4HvSCdpdTtxYP1pKxMqhtxsDWYoxDnKGmNWL6dQqN2kzs1ku3yT5bBxV7fsqc9FM8jr",
  "key32": "5ryhQbWySDHSSgCtMyJGq9jFNnDMAp5gur3KfCBmkKjmXYH2qMstRVxkeiWJiuVxV1HinyHGRYmiey9jtH3EeACM",
  "key33": "5sRUX37Xcgj7mqQTSj6XsskRfjEGRHheuhHCG3WxifE2A856SsSo97zPunWNqww5HG3sGpG4MoK8HRLXWZgLh2WX",
  "key34": "2wzSMM7RQNTeD4nfAcY1QRnLy3TBkLn9c6eyApfYxQeUmyjG13CQA4j2kP82VWVuMpG9L8JzsBicc3cmJ9kqTUME",
  "key35": "bATx1fmhD2pKkim2oDgXpRViTAc2atj19SnemvZg7prtV8fYzREGQB8CyvyXJGobXz1jM1Mff8BLWnrFUXguSb9",
  "key36": "4V7fW8WYEAe17Jc64kr9JCEGHw82oHeYukLiaAFFkgqDZTSnxyP6DKV7wG5RngBxGocUjMSZjxqfQpS28rA721hr",
  "key37": "2QqAV8FiiHCegngw5j8Q5qZDwCQTZ6EQGhBxuHYGfCZHgK3kUWBoXojxv2appqjh3wmQFPSyWEAnRmfJfXvpN5y",
  "key38": "4c9LX4LDqtGgkFXzp2chyjEQr5ctzBi8ipmfnZeEeB86kdhsuXgF7erekt2yra7SwzPY5fkN59mfSF9V2otGpTWS",
  "key39": "UTN93FEejbH1iFg3s5miyCR4FXS2vgDDfup62VoC6jDVN6XexZt2aNcuD3VDkX7FGusjFhreB4KjFJbUE83Q5dB",
  "key40": "4vFFAdwdvCbLpBihdKNan8RceuqUecMHMtCUtf3UZfhN6jiGY9WT5yecC2LUBaEWAFSVqzid5N6sXmXJ3FWzncq7",
  "key41": "5MGnv1SwFUB8gGq5uP7WeudmoyYfyk77gWruzVjvV7rWSPphXxZ1r3h7unwiJHRkpkPsC6t9eHwERUmficgSPne5",
  "key42": "5uXhFTCNUwQLhDnAMR1s2Cin9LJamfeP5P4F1aPKN1DiTnE6BS2YyVFSZPLFuzRQw3819qS1DC4LqDtZiiyXYg1t",
  "key43": "2muv6rMzQP2YcHkVwcjBHAYBLzH7PKGKwD8mWrtdCMMDHDoeDNnqfDfHbSwAzgBktVkDpwAbqWA7YxmRui9VCNv8",
  "key44": "5mCjBgbX7JdcKz9HQovGwsxL54exFdtpNPwYUgaFN9BsQsYnjAXJvHfbmXYBt3J16fnH4GGDb245av8PoEtieqH4"
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
