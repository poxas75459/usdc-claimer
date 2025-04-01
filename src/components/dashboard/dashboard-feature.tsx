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
    "2VgN68vnWfywWHrXPEwPMo6o7rwWBi5VttofGa6KDjzgEZcn69gJPHFZkuPdeE1jLhxtFMU8CexSjTLvBHgFzw85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iQLkC8aEUJhqV6yZHhdPJDwmwSoBh1asAudFgRwHu1jT1UzRDBxe4UwU5q9gcxDFhy3pBFSEs6jgxdz2F2hev1e",
  "key1": "59mj5UfPppN2QnDgUwfQFfvodjytXU7CR3dhX6a93XkYbMKxFGrxyQSsM9T2brB9KhYmFqdJcMBDSkpzUK1L9pwo",
  "key2": "3C4dX4V6dB665uRvSju1oKfncbwktJ3LF1neDCDM1vm1AdkzNRujoNUtmwqcDJrDhGHesS9xnhHEBzdzzs63Nt9X",
  "key3": "3EJAC87WEVcuhEt2ks1SU5SSWScZKET1xwXdziLES6ifccuvP1s5EJC6teaeimqwm2hPLymw8k8YT4mHMrev1zkB",
  "key4": "25jsRVxVzovSNtMDz49F1Lk4Ma3BXHFFpKh8rRzLY2LCqbPh9Lbi7QoPPjeokmuiynKo7S1vKAd3jQGdvhzocFTq",
  "key5": "5PFEx4bXquf3bJ3Dc2RbAEAK8YuXnNwcTp3uZcnGRa1sXE77JAFYF3CgMVJmoWoM5ijRqhKQw2aLYib7htwxBRsE",
  "key6": "4cM4KHz8pAckgGRcdWtNtyLFvarJmyXBEdAHCniqpgPLEiNMnVwvpUDL8f9mBJithbrL1E1XWuc86orB8aYHbteA",
  "key7": "2UCMMA94Qrrci7k9Wg1KjgpukRTpYgn1MStf92ecQPuBUqMLcwnieSB2fHskBwRAG2UwotLKsdJVSLv8922uLUMv",
  "key8": "5QjV5csQhDMLwPZGJgWzfxBA7v2i5Ldinp31jApXeDkyRPvimQDzSdGVqyuEQhQ2jRqpuYQNeKRTb2EWdjmnCoCr",
  "key9": "ce9Dp1YAnmVnvbCKGE876TxG4PtvodmHdgQ7FiBnwCiJFCS6vwF88DDcawX9273L9ZQYky3xLotgkHzDmi7LYbS",
  "key10": "cYGkQbeaaa5yZj79gvZvwTbRamnEChmk755BHfkSmykMMPckgRkccgLF4NDuFNVwrSKwhegDSW3mmumYXWcnhWp",
  "key11": "5haafpDgNH2gFiBMJ3GP6ZUfKz2uLDPu1dRaF31ERr1ir1pRLkv2gfjnWtKoGvRmbCV8cRpKemVW6atiLAgy4xZd",
  "key12": "4qSx9RYLHi7vgfzv4GWdE1NtLrTDzAWcmUniQfcq9XSCfaifJNv8NbhW68r8G469iQa3s9frBH7CXE9oEEYzNCP7",
  "key13": "JjdGDHwZJwQsVQniVjdrTCpuhWZSBw7WEwim97NCygb25My2jrNNHZPe45K1QTmkPPmiznJH5mQHKdN2sTHUDHx",
  "key14": "4nB13My4PK1QbJYrS5kNfRLKyVuWgVmiP6sfynCYJeL57Aj2RzscCxAuEThqM43tvRxsZX8bA9Na8wX1AvwETtCm",
  "key15": "45DYMqAdft3gQDXNFySZFZazy4o8ayJbKU6yf18YXd5EAReSMNncGN8zqF9VGfSueBRDydCP6GMX8mU75FdMHh6q",
  "key16": "AEt9xinVdVwxCrVoHHzypEPrymzwPnJmdXjVco2a7KzPdZZkQshboM7fC7jqkEuSFTcJHnmCDLEppiqMnFmphvJ",
  "key17": "5PBBe7BRjHqfoFc5K3zirPgvZzzb6afPg8xpuPM3jz5LT2FNRzbuufztQcqhUNrANJjdo57NUzbHY78dQwmvaFKj",
  "key18": "2quD5ACnzYDufTP1VuZRXMVMRKigAiM9zcbGkanksGbpLWk87P4q5iHhn9dCeUzUaK66gHAMDvE4dE5C9gP5jScb",
  "key19": "3cj7kUByeZUVVJ9EiU7qLpTYjCsdbTGHUoUmqsVUvTEmWupWnw9keaUcJaohbCABP8cx4Yr18ptvDEnAzqER5yqj",
  "key20": "28HR7ybrD6ErGSenUYi5GpVKkmRczwUvvguWrEpUSaKQcf4nKVZ67zh365L6ZuwSmbvZbBsZYnVtynwFaknYBV15",
  "key21": "4sewc8P6XzjPRDQ1NGEMjM2jkEmJpmVUHdNTuZjBRqNUpLi4FU4v8jw5FMhazRFqyg55yutFDg73DZxDTLV1vBGS",
  "key22": "3PT2EL8CmmsBE9qb328X4EPBGfMaBw3ceJAz6a9stMqCjUXz33cr2KkAEND8EeqS5pCGzUwyDYcFgBQ8ii3LHcmU",
  "key23": "227eRDgxAyG9xYZ7vqsRMsvrePJ65dFPt3qRRu1oW4C2f5m4QPdoczErUDMpeeqm2Xf52MhDTsJgEftBBC56fDAY",
  "key24": "4t6EydbPZvXFH5BcRTvz1TNX8RBdwKtwwaTWcBT4aoEd8UeKnjMiozFyGdakmb4Y9VcPSqQtR2V6YzhXxr7Ehnsp",
  "key25": "i92eBvxL37Nv1B2Sg9uCkLEcBMmcspHty2tPhyTGn3FTiESeG4ASvh4Q95wzu1cFGSy31RhTXRBpWvfzmbsfgsy",
  "key26": "2PHjpgMngvHfgvt8B1MVu6RhHsVy7QSrYPkw5qUNTatpxx2P4TSkarNWqaWWT68ndgZ59YPuVRGanvAoqsVxRqSq",
  "key27": "63F64ZVqxnMjC84Z3j1ywsBicv93GJ84k6bhfa92pq5ewLrJ6W7zcm7beZZwZ61wPU3cYdWVFahurpPmTR4KimBx",
  "key28": "2CTodNtMjiSruft3kCsS6xzToucFBiYfUgicLtvJoxfZQopKL5bSjcpmTHfJgVmZuNZkPc1ueip9Nr6GQnDS3JLQ",
  "key29": "jMuNgvHG16jDqneC66QJ44K6UYznMj7s4GHMb3Qb3ypuhhpQZi6BUg16ogybrh4kq4wpYyDQprbhV8QgLdmdjhu",
  "key30": "36HyYpwJD8ViYPTJJ9cqbrHNk5tvy9586R2rXm6cnvQBcJddNaRiZEC1t8BY3k5qdZYPLzp1rpUJ6nqTHR4V7JEu",
  "key31": "xUi7WXVqBqB3XtqCNQCXZs2RCkVdKU76kEhHXPFWLpPtc1YYXCJpFJG3Cxwa6NBLbgELb69feKwASbPkkerAHvN",
  "key32": "3QfuV3Su3PKviVFyPqU859AHHkQBYBTL6kL1h1XzDfpMyFTTBhLecP6jhiN5K374qvhR2mvHiD52q2SA7pQE39GC",
  "key33": "43XUB3Di2RJDFxrHGvi2R9dHtm1a76XVAbqp4r5r4dDknVZ33YpHAyKLbB2CjDVzJDzJy6mjb2S5bemuDppZnq8T",
  "key34": "4YkMSv2soKgtAwKtfxZMEVMGGw5W6BL3bTPsyozGy3KSAWPNhsN8SRNfQAgP5VHQfGZ5ViQTKogDcRpTSqnyLapZ",
  "key35": "3sD3NJBonDqmmdERedpWma4nTyPPYSbT4e4tYk5pTcXBm3GBnQ4f5ZqiJisnboGd6XQYtd83XevQYArfHYrYZ5ci",
  "key36": "6CbX7XeQeMNxoaVig39pQ3BYVBbVySYsAazzPGc6PHA5YucoCs1HDeHTTdmAJqmQysx6CmkkAfhPnRWJh9FX8DH",
  "key37": "3NL4QwyCEMWVRiuALK9qS5ALkmcd5MB2LoLQkm9sntfXx7SvC1mFbjipHHbQ1ixtm5vCaLBr3pGya67oYLCrZpL1",
  "key38": "2US8r7Th8mxbpBVQBFmaqUcLRUAeXSVg9HHdYAKWT2A1XBnMjFFupPTC7t7wcdmVeWnvyyRnf1y3SMgfHxnCr4m",
  "key39": "4SP8Un1AtSD7BEWNtD4o2fMmseT8hqkzyXx9NvBM4X8zxAupMe4y23Ypzv9UkaQopdQPg4vEF38vE6x9Jt27b2i3",
  "key40": "4rTNKje2ekSnVFbjbWMbLKKa5YM143dyLf1s5QMudB2tXYytBcTXJK4MyPWg2Z7RaDR6bnhUima7yPtkFzQETgZN",
  "key41": "64ZNhepKYe3yg31o4ddEPTyifbwxdWV6C3UmfYwU79TqNc7Pk1S8S1vYMkk1oRbziQz3gZeZTq8nE7dA55iAK7Ts",
  "key42": "2BJRQSKwoP7Szhe7XyfXwr61Khi5nfL5mm1qLSaVTvawgzsXNfCWU2b3V4F8FxKZSLFK2kB9sCeWaFq22uQCpJ2Z",
  "key43": "pmLMrUkJjBCDcpPsfNtpdYcVwL8E48UKfYkkE8MDNThWFwXuiy1UAZUA9szGuqLGjNYp5vjoX1b8JvT4SNheT8M",
  "key44": "3Mu8pqjjALhSo1UPzBLCEJdv5sZupFCcecuXyNHUW81XBmjJRDo3mJ7pNMBDarZNDp8Z7cZa6mymjUKjhGJRURf6",
  "key45": "5HEsj5gzGKajeLnxJB9RD7KUUCLHX3RLspKSjsVLAr8xwjsFotXqdcjtbTsm3W1wcctVPbW7coiAgXnWkEjgrGx1",
  "key46": "3FCkmADopAuHackpgBgUAPy85cHNfyJy42zzdt4zKk2FJBWmcQAJaRRTfXVSVn5VgmNTx1cZEmfRFbT1Sz1e91GU",
  "key47": "46zJ35pxhuXv6wszcQnXNaCev7HiWAE929D1v3Yp6NZ5nqMWzcRx2LXC2rLRbTikxUEsEvyfkyXLuCkaNPiQTGt8",
  "key48": "4bg6PmSa9TMALGaS6kAtFaQK3mnXRTAkABwP6YWyMxaZnuvL13e4YikYNFv9aG2M83tSVD2oDBJ3S4gh2y7ekARe",
  "key49": "auWQpvywzq94sbViofRB2a1DbwXbgCZvZdeBCtFTVef4n6DasptVmL39sy7HBJff5MoVhYazL6sf6AVD3kYzobc"
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
