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
    "zScf1Ghr35bheDX7evC4bhvVbFipBKsdeecMkYtpoGsCFDaZup8UgUdCFZGRi6vwX4G6Pe8QfT3BtumonTHACoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oTGEbzMDpuGUEqfB8aNwHiv6Xp6LEQZV1B9rD4WyN1HkS8RASwUb22qmQ4DVPavUY8MYiduNf913FCQijsvGzcr",
  "key1": "4j7CMZbSyauc62PjtBurXJsTDVxghUHkM6RVQXYR1UBKaqYp7wqeUAFRU3KiuC6f81ZgSvM3gF4Hz2F5KQKn2v9N",
  "key2": "5p4JhUpHVSbHy81p8eaUk4Y8qmJ2hn284fRNVo11aieiVHyP2C9T1uSse6KQ3MsavQXybwaVkDX37CMnrKaGub6Z",
  "key3": "3nNXwpNLuJNKgwmEiCVf9X4rwUXwns2uUZbg5baHeeprZWJgMsquBy6AZgJgszhZa18k4KzwwUL4Ugex9e2P5wLJ",
  "key4": "2fMYcgA3eXbppXqGQuEVuXfigkW1RTwzKMLiEgih2D2Bb39e7ZaeQYE614gzckMBGaBF6Lp5D2iVovTsMYuh3dLw",
  "key5": "4dHfJbNqkHJaybFuzMNk3NvB5dy36dV8HZEa9Pc8UA11ESgXtH2PvGVFUTZ4pJzRhav6uhRE9SXwLSaNbSQnTHsc",
  "key6": "Ec7VMun1sZgkJ9oSupgMTH4sziXUgaUniHQCvogWUQ3B1tDeft4ZevksBveaBACYJXnaa3aR1bd2vaA9EFhJqis",
  "key7": "55796hE4SR6KqCp1Aj8SDLbC9hw9PLvDskwTgPHjzV4tvKfGJdh45tNoiG1Hq6x5D2YHA6tv1A4ifvnGjjVAB13v",
  "key8": "4W5pM1X8XkAwW8DmUvJeUHFxcdCuutk1Ayj9443MN2Tzs8NpgzY3ZLXTsXpog1QYRqEGhrU4zk92wGCNBxPLu5fn",
  "key9": "Q9rSPSc3njf7VBnVdcQEXzUoWR78ChXT6s6rd69EFiR13g9D5LQup7TXRrjQve8PKd3m7hxMrg47vf3RCcBW3UG",
  "key10": "3bFEuQFnbFoUNis1gAzUfCrkUTH9FMwjusfbDnCXSLFbCyTM8yik8qbs4KEYYoLsSSiXvFhaQzNR6C2YbQT1BsaU",
  "key11": "59bZJn55XV6iXqSiPS5bgSi7rzkfoU4xZr4KWXWoRQbtmPztGjCeiK699aYuK9Uq1rZV7pE1ivxswtB76ECqp4Vj",
  "key12": "WRhsEnweQ8jYyi4E1LngiCFUW3T6R2ViQc2HRLZ5f5YK29YyxPvF1ZDzFFJvVCDc9cAijJoEfGzVhyAyZmpxWWd",
  "key13": "2c2Nqicf16df77cTgz6QVsYpBUaR65XJ1NMiQe1QNFCr5ajvjUGg2LYgDrjposPrX6YhVirSvUUAspKEv9k3MYNr",
  "key14": "MmLUwDW5cW37pJHM1vZz3V92VmDzc11DAWggUZoCH9RMcKaB7gUn6Q5vm4WKrUiZzHPxWUEv2J47VtyKgDMoCGB",
  "key15": "41PamyB4nCiSkCwWS82uFYuXM7DayD7UGsYC72wJVjSHt38UziM8KkMzb5AHYj8h7bjUKoNsBcMd5QNJ8pyx5Nce",
  "key16": "pjXUXnYwyQJtq2AsmcF2yQBMMaoGMgf9Q9JqEPxAVeDDFdUsQP6EsA4RsRNWDZ5Gwphfmnc344eGVUTKawzcSc2",
  "key17": "5t1F9hepsDx3bfg9NnfbqmcZUWzMshxEPKSTuR7wrpJ2yPBMWWJMjGKX5HeFv1X8vwQFhCmuZHA42VfNVzmmGuH9",
  "key18": "5KFyZyGz7vAbizCp6mPxTFxwRTQxcxBtutyWQJQCBs7kwpHQunQy9LEqYF8vLpaLuCV1Bwao5qSncvQSKquS1UDs",
  "key19": "4eEZcEooLHZuP2HpRoQAkWzfxdWC8oDFPqANipEypVWWMy47cg8QR9AbVKwKqRzzg8DB3dCQA65AdhUt9hfnaze4",
  "key20": "39Msm1of7qGAg5t7PQULR1QienRp5c48BBe6UdWx1uCtQWTbhLdETN3SZKAVghPxWyLrGFsBSfiYUyExgDBz83gr",
  "key21": "3XNYsvaBLDjWV2iFqv3tmNro9H7Nc7LJmYv1i28p8mvyZnppJSbASTCPCrdB675KS7Ho15mkvkqgfL2P7p1TofPe",
  "key22": "WxsGQpw1opZfQno75GPUhp5xcZNHfVUoJAke2oqY7TAY8zTcz1DLq62oDUfRH6J1FR7DoY6MUqZhkPfgVQ51GjN",
  "key23": "3cQdjtfG32hB6mzJGfhf6ppjpAak15YPXpcdF47Z2RBo8tLjd6QmrMWoGB4xb8oERnPYrvv9LoKRCwYWwvgZXS95",
  "key24": "4w2tTrakh9V7dC7ex9Rpbtp9hKAcXpknLyM67v2sQzR7yQirWJgwaV4T3xJrmdRM3ZhCi4yDTMq6Jgu7H7Ne3NW5",
  "key25": "RV6pvLtMaGeRax7NJyDTnLBA51VQmym9XnVqKJCFjWf3JG2iPcXisukf9fjs1Fy7kYMtwp5oHnBw3368S6t6nY6",
  "key26": "5AvA3a6rbMRC5sMWc7UxzeCJWiPFkTwwPKsPdB1A9enj4h1EQh1dYniPM9Pgd9azc2rjqD8S9QBEejTGGMhHjchG",
  "key27": "5nbYbA9qeDTPx1sCjPb6t9UpP4cxB5XJ5KQANesXvHmY6Y5kRd5r5tCYpZreWANKi4UfFcmRFvjSK4Dz9hiNynvi"
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
