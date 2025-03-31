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
    "p55s27wgqdzKwcU6yVjzGtUo5tBKMRAG4thqt7rLMzjc5NUPAZ1aH56uKxjXBSnHim3yqUM545BcB8sQjUhAVRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PU1nGUpa4GSkC8889KN7Bk2FHGbHFZxeZGaFuh2TkL2sXjseaBgWNikV3dxQTmRqMxQo481FpWb33rKbpU49xPR",
  "key1": "4LkgADeZerso7bjw7HokQBR3PwycDNtEFrAFErgBFW9NJcDqt1obP49M2VborPc8xGPaECucsV7AbENRFWn7p1P1",
  "key2": "2Ju3jNMnFPnwfQvcbvXgdNkscVmRDtLueWSYXx9mTm9uDaZKwzyXYsuUHz299MkRfDaXds6GvFz3bzk7mruQuLFS",
  "key3": "fyX35yeGMqm5msAtnBxRM9pzwj3LKR5x5o5HCAx4JzqxyfD2n2USvnV5auF1AdhTP7u4LJkiqewvfkwD7uUfH2D",
  "key4": "jcJNLaaHZu3XahDPEdJHHCeu9A3y8t3QTNCAiSC8FFFbxQkcTD5cMs4fWC77R7JGWDgoNifzY47qigaeGw92i2u",
  "key5": "TLxXyTkNV6ZMtPVQnVh5BtjfAyt6WhYCxhRL3yEMcb5ZViBa2pfvPchpkzS84vs3guTkidHCSH9zTPuaReurRCi",
  "key6": "36a16QqnoSm9xHMeHwNJU2SaWdg45bj4Hn41XTskdLjfnPm8sYJMsQjoMNRckEguz9tTAXi9ugdj3B9yVEK9STuv",
  "key7": "3egJhbrnYUimYHoyS3vD7DBZUBUMCUsQtmTEKA7ieyypSwfDZJvNZm1UoDcfuPbNJcgxcWGrDR2BPz12q8MnxvAe",
  "key8": "5bx8Bpa3uRug4a2McQKLeaHN18oF2Xmh1RqreqwtZLw8A63tujWTtsdVVD3ySSf6p8SBpyFn1PR2hGV86JS7dSi3",
  "key9": "4JVAUCef2HZGRTEiadoVaSzBob5E8obvV237EUwToxpmuyNZP5fYAN69jPv8o9DVCPXwmE1GVm3BWP1nXuqg8ntg",
  "key10": "3eNzKAsCL8m7dZSjsm6yKoq2pZrrF2x4iGQufH1QGF33bfKcWhAJ6HpX54zp36iBJETyZ75Lttw1EFFdf7LMEk3q",
  "key11": "2EjeNEVN63HB9kwcrsU5jcvtmHutxGNjxA1Ngrj2hVr5yGG7MCpSdEusaZ7oiPazz71JgRNKSjN6JFDPMp49x8v9",
  "key12": "6UmGjReeHaTgR1iLDFuaXeRPEN9goFMNKqa36in1N77vgguWvWoJTYL1AiB23sDQUijuaW9QAAo4qREp7UavA2m",
  "key13": "5QLwBc6edHH4sfjZKzog6TCrf86MXQy13RUuh8qYM6uLX3zXKxJqGDiHgmRyc75vBjiofuouiF8KXniSDTN4s7td",
  "key14": "3gFzC8XgLZmvsFX5fwWU3cGnRDqjH8rpFwMPEKhwanPmn6mNApAhcjo5Uu2RStLu7CjCarASXV2DudagdNgM39xa",
  "key15": "4vxrRzSY5LT3EpqdxRKbM77arTdiM95bH8ZgL3eWH3SUN9MztFxZ6kExhcA29FADeXPNExBT35zjuemqQx2ZgPvb",
  "key16": "5WcZiiXhYD1b6qB7RfmL2gBNFdQHfQKwNG3dfnYgJG4xtNdSSPjKo4L42oPFKR3GV3ZVSx4kyy4ZzEDMfSLneQ9x",
  "key17": "2LmPHy1kRiZ8AnFKcBwecmwBWKgSzxtny4yU7EAsh9jZ4Fh1Ewk7ZxpTvjeJXs8nqauJLrNxMFJqRxdY9AYenWnr",
  "key18": "58zuXE1qbsUHeTciXs8ku9FJXphfVVb6Bn8WS72EESwW18zaMoqMhhUMDUcTErtd76AEiyNrAg5Dy9NZX7Bx5VQE",
  "key19": "MTdNLwzBXbn1egUA1VyRFyyW85zKH5fqyt43eh98W3kR41ibfewdDkaRft7TqBeqqtx5UzMRmqfgJmGHUFeL3zz",
  "key20": "44XqGMt6zmjqwGP2jBDt4y3yhj4XjSuLsBPjS6BnMXXzEfKZ5cCNtsrefdspt7Qg9wM9iVk6UvvrZGSsSDiMtU68",
  "key21": "5okmyky2KwxnjdfFhHFheWXAZXdNrzeJgpBxQ4ZBp36EVPsMPu8UqycuvRaGjKthcZaV7BekhfBi9cMAVAdn7X5A",
  "key22": "3JK4U86K3zthrdw2sRUBPJnAcQA1YkBZm3V8ZnGxziAP1oN3fXmtUzkUDLM6kstLYPW2Yg7haEsRFc3JrvoDSJ5r",
  "key23": "3zhUD9Tnnmo2gZDsMZhJpD5d8Cs8ZuEqmuK4YMyMhk1cA5aDQ7SymbzFkvvDYuo4H5iMi9cmvpv4n5y9uBgJmhKZ",
  "key24": "476ZwBpth21CoqgaNFbP9xdoMzKx52oFdohkz5w1oZXpAwD4AQnMuSysGQZ88w1J4Ao74ny9cwhe7M9uEHNqNKHE",
  "key25": "zSP4GK1GiCDky288pvDXJ2MSpZzrxwcfzTTv5eA2g8ZsRhXrLJUjmpsjTbnydh5G5uWgDwppU27mAMYP3vN7Wof",
  "key26": "uNKRY7ECpqJ5FfknQmrrQBRXfMSNmQxP4tNgePntVC85QdJCR912j7HYzRXEF6UptujAVeNH7SsCs2PaGgSMnoz",
  "key27": "4mrpvjErgkGmuFRLU9W1LnFDXtvy3Sp3ES7xLUEqDuCnT2R5nQueKvEAnmjUtWmh9Um95krUFxC35Uyc4T6NUzCF",
  "key28": "poZUCkwomgzThfswKAJwBZJWimsDEBTVCf2LUcKJoV9cTrsW98MuBmicRbqdGfccUtC7mLyxJrvyPZWqmFb3vYX"
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
