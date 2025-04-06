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
    "5Tx4jhFzR9RuhUcH5kRFECAVEBrPNTWnNQVTDuAMZK4xhJGxvwMUK67VocZtS6Gbmse1KttsDQWjzq5BosGYT1zE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5md5cGtJHWxjHebdYbcHm6cN3ZvPaXSNUwisjgCm7NKjz2tCX2Ro5Gj7zwv92wiMqTJk1RUsUWFy6cVnu9T1HkX",
  "key1": "5vuoBBNCDMpHuMYSndL3czKz5f28sy753N9NNtsRxMJoGHF4zcM8wKeUxtBwSP5RLcvamuqiQtuWuqdNPa59gCHG",
  "key2": "36yAH5S8LgBTS5w6mKDHYT92eushVxQNN6zSPnsoteFVPaGVdqE7XwR4XQJKeaLLFeME9ZWPGrkzVSuSG6shTtCY",
  "key3": "5hNFQuiViu7nHZ7emYjts1pR2jHHehhaTbJyhrAvKNSzgoNnryjLsmbHdZarVZCFdpzo72neLWdrQBu14tvTY9R9",
  "key4": "46iYe6oVnuytfPFHNejDUZ3547UmCf1uLiGrxxBYJ24v1h3kfcHyveqGseDy8BG9GTg4FYxtS5Fm3TuWHxgLEYmS",
  "key5": "aN2ezFHBc9Jm7gGkCdJj1ZEL6DxMaTwZyijetQXPAHwGMDsNYDuJcoS8jEjpL9XKMexXyxGtcwrzUGdKD2GsDcj",
  "key6": "51eqh5XemrJgCkArDMHZoRuAq8aTG51JuoRpqQc6jhJV9mnPu5MP5F1TJ43pvijzsSbTv44ECuYy5ZdSLZZnUKWs",
  "key7": "2CYaSiXaatRQgqWhu6bA7ysT65qBdPC9WWPiZWZnZn16PNXdzzEskt3jAKv4qSEfAdojtcsF3HZUMLQL38BbvuvY",
  "key8": "4Htevp3or7Bt6o7CTo3WQ8AX8r1ZYurJ3rQAFJneEDQoypUCur9CK9Ccr9YjSBMs6V5RCRWShcgfLobA27cF3dDL",
  "key9": "3uqrbQxSJDDe67qZ8vCR68Lo1Yc2jtBYh5zhKQ9T2qUemCaPBMsUjMPcCd71PjGGPeeLA5gJQAfop7zv6UgjsJfY",
  "key10": "pEQvVuMFPZZaAyb9xfcBYUPkAEYczYcu9LYN8ckv4mX5gTXwKxKtih8UJqz3NJu4Bs1vvY3yRNY7KhZ4w1S1L4E",
  "key11": "KkPQoCSFY281vM1v7wbypcHEkPZJbpcUy4QKwpSbZ81Uevr7un64anB29aXCKZx15hju5EJt37PhGBJgbmfUbMw",
  "key12": "4DvWacBnXF6Z5X3bRpQBXRoeZu4p2gNKUCDjumxaQit2fned52zLJqCbkMKmfPAtzVdaCsuFFhKy6j14sMiYseT",
  "key13": "5aLH5QBe5uMpZhvEC5zkNQ7bceGeQmkeEiATAT1rYbeXPg6cNvh1hhwjJ9M9g37nEnZ6isjaGzcjr9BqPNeiP7QN",
  "key14": "27AvFPVPwE12AaQDPPBapEV4BNzsDvGoXXCbfCQVQp853HfRjPKSqWcaJfsHTbqUcPyPe174YDn4bEXVbSuZ9dGD",
  "key15": "4VeD8ZsprZamNPNidQqJf7KwjKfEDruFa6vnKhAqRSRewsLdrc2CwjdvcfRNirMtzUsxt5Bn4DjUJJGUYw2zQZUw",
  "key16": "651HZ66Nrydv35nNWfDh1gFTigZkigQcti6SiptMYCqbJbykDYNCp3r6qsfp8bzsvMtUAtzzzEE3y6UTLTbLsxfq",
  "key17": "641NhvAmrLKNfQiyftjc3h5G6wLf2317BYQKuGUR5r6SH4gctPhPmX91qZVRJozVnxCQrMCA6HVDD5WxmtSPe75e",
  "key18": "3VfRAofRQd93taqgcZVo2m46EhAyVMcTZc1Xm3a9N6J2b1dWpQmXTY46gFSbecu2cvJa8PrYuBkgu67qQYMuAnEg",
  "key19": "Yv7PhwhTWeF8JB5nKBkcE1xbvorgA2Hbw42P4MUxtjR8inGiHv4LrBaydfJwsuzgVCCQtQzmEQr2mDDPgioKHFF",
  "key20": "wNQkZhqXFFiB5cMDv8SbgLBCg1DFyLeRhvij6b1TJQpwM68FCvzzabcWxpmpBiKQWxG5YqrV9FETRg9rHSzGjh2",
  "key21": "5CfFSYuBZGWH7gmvU17BTrPgNkn45yTHRBDQqAkfQNAHL8FaATto84cSa1QL1KUXJfmn5TNsLkH1V3h7ond7VT6D",
  "key22": "3ctmoUiT82VohnYbECLxctAhNAHSqRUrx4AQETqdx8gyFCyUhxB8sA4qeYDxgAuHfwMQjJt5B4ddLryGCbJRJR1a",
  "key23": "4GXk82XTjwA4Jz5PvS1hERGUYjZzVCroQyMZTA5JSzuc214pzYQaPE1vgc39u5ofr2xaYnfbFVCr26PioB9qMNLX",
  "key24": "41tntMg9Zj85vdNR4yCERy9TpT3stecfaXakFSoSVvnEqLKdQt9xRxK19jPR3P2ZGN4q8gtJWp3nTeeaeCce5Jeo",
  "key25": "5jfrM8cs5CQMmuuV8n8pUjvhpqdov7zKjGSi9zwgDFTd3J2iyk4He6esbDttXsLHt8wdFJzMhpNKemMRRTw4VJSQ",
  "key26": "2FuWJtcAD7jXpYtSmHYH6sLwA549PxiNA5DrTamjaSiExjPw6pi7MpcvAnUcSqfg45S93UJ5eCoS1ptm5CrGoTcz",
  "key27": "4cnhzwMoS1GocPjn8znK6cafycdXmHGu4WdRUwFsgbvN2Yzjd3GRwRQYTTcKJE115CUUdTsLgjxNCUiF2UHZn5m5",
  "key28": "w4komHQvKtSLJPCGxMAnpk58xkCu83RkbxfgxEVE1ZE2RzKTiCNNWhNi7tfT76v3X3H83aYwPGTuzF1XW8gef6Q",
  "key29": "5WkYLbn3jtAMVGUuQaC6DH3xWduoJ9dVAUnFdWJEK9PkpzjumQ4pAVUYLnZ47PXtc8Vw8DF32oUZxHeUGo1rXqDQ",
  "key30": "ViT7mu9UD44z5LXwC9NN5W83sDBmVPh4aWGckAyWugdUqNTBajpttcr4R5VZzqFeVxULGSGKVDSfvLWLZ4juzgR",
  "key31": "P3r5dBjfHv95w73t2PmBuU2ToJYgmUbPBV6Z455pcd46FY1JUYyJFU9BgfJ9uvcR4Zy6XXCQZq6dVhnkrkXqfzY",
  "key32": "3heQHZ4DGHfNkq2Xic683jD6FAuExyG23PEUXZV6aGr3jaULQP7kEFaWbUNsmuMs4PWEhdrTjJNL9ipb9sX324dF",
  "key33": "2RAB2bxYEoXpd7CaWmMRdvkNWtGJZQS8L7LRUAGvfuYF7mWULrmiBS453WuWGDNzz4hNDnqMnWjTeWgVT2qSNnBU",
  "key34": "avhUUMxTuZ5VJZMi7HNCushumvZ33jSFF72uiVzBHGjPbcWHEz7HUv2WQyopDtwYswuZR75GRdM9fnNnqGqADS1",
  "key35": "128gAjJUMamjeQDaZDZpQ8e6XsorqF3KNe9t26aZaT1SWDjjeQwBJpZU6VjeFP2qwpAFa6euDbB6tuRwqs8gABNc",
  "key36": "26nthMB4hX3KTurDsxTV57aHxceLWvpiqRB1KJA1TWgwz6JpJb1VBLqefenva3DdHtm6pmfsWVdfnXQ9F7Hehy3K",
  "key37": "2d3JzmgUrfwDmAL6wbs3etWizhpfV29VsTmvg1vd111Ltd9a7Gbc7ataDLKZrW57RW5m27Zfd6HnXSDDvJ529Yi2",
  "key38": "RKCNWU1UZ58zRtoR6nAkzDxCJwbUTxQWTk3NUqyJk2hRJZNfyXqaVToBJioAuKDtTbciEyfLKsW2hwt7e72Kdgu"
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
