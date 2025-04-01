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
    "4RasGtECs7pWBn1YXv6QnDV6ns3Ghz9ZDhMBsDW6kE3U3SUNxtgnZ5iQszwqwRrMb1cTMEG9523GN9L6ufyyss1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TgEAGHyNXKTd52uXXhxpSFyi1bJMjevHzYcRvTGq1NpEWKLFEDNeSMUdAiJ9GYftCB1BAZoNtLquG19TA2Bo4Co",
  "key1": "3ysBoEFaLkBJHCk1HmrrC8jYEffnqnmMNTYFWDhZ6Q8buXwkb7TS8rGVcH2L7VEe39zpTpRX6pwxUdQJPTJZhw1B",
  "key2": "3Q8khbBwasBRay9cFrWqCXCLP6k1STmPupJkQZs3oUufjZJTD6SLck4BVMZw9QwYFHyGNAJy4BoGbKCmaLgW8Aay",
  "key3": "Zb71kK3sCafJTfvgcQBAZjzRGPvjNKEyDhMbdsSzqxNPZKM3qrd2vGcabFajARW5F9DANDjyhPLs39aRL61rfuq",
  "key4": "BetNP45zGNHF9L9dkjRjvjHwf4eidmfJ96RCmb5c6DnpMHmahJLEdepyTgzT2rNNhMhaWdrwCe6JrPzPcCce13g",
  "key5": "2kGjWYhu918tt9aT2XgCRYjuAc9yyVwDy6vhmbxvmsYXDrM9GKNLPXd3VzJdQ46zNffmR4RuLSjNwRvFzRKSWCPq",
  "key6": "35Xs1W2M6YWsfgVQsmVFu9joxt9tsKXTWEupLTSQmFmikACprtspga3J25HoTm7Rj8hAJiFPWojy6sh98aRxVzJW",
  "key7": "31UPQZWHZtAUpfy4CHaxCYvX1nSoD4T2scHijGNxHE1SCErUqatTMZoK275WM7xB19gEoUC36b3pBgmYGVWRCrNq",
  "key8": "3bFvjJKskddaZFj13D7wDb5fXfN586aFDZL3EkHpVs2ua7H657TGecbtBEDVGM5QYg2duDPhnzBkouhUoNyMFpRa",
  "key9": "5Lywvx2fArBZy6cPArBCsD5ai4F77TChNDZyE9yzVW1K92A2TidKnu6fRXhcnY6DiRJUSofjVYbLgDDtw4n4Hx5q",
  "key10": "qG9U8gcKJGLbuuwVQV8uxPVdNVECEzX6JQmmsXmERw7GtyTLkRt7up7GcZyQ2y6c7w6dF9mA7tKV6FBLNZe8nuu",
  "key11": "4oTPjqtyvDTD7R2MojShEe7FJBnspx6FPHr2tMkf44zLZ9pmLkrCetJ6iu6BJbgUb4tj7wT1VtYpf33NPJfAAJZm",
  "key12": "2RKBk5YRdC8BBLAfiuvp6uQydiQoxdaw34f2Fi2fKDpZYxPxYmJmEA9AWMvP1kGcMRszbYtxRM5DaERTd2AnKTxM",
  "key13": "2Gz5AWvPaHoiGrcywZnJbLwQhF2xUDAWB2tWGHduJavrhJgVLqnhSwhXdmeWetcJ4jvRU6sz2YUTsxtQZGXoZt9b",
  "key14": "5VcC1iWB9qUHaKeFYKPuNcbAcigq2R98N875pkZ5maXK2AfHzMvXwyYSGBTUB9w6XyuihJuoWZoDRQZYodXYEyy8",
  "key15": "2anSxbZkhZKjEupQJuH3Q1TwjUKckkmmioohDJksabZwpkBEm58CVzRD3JMouXcb2wCXQoNz5KcqBpGggDvRzSwc",
  "key16": "4gTd3nKvuD6HSta9HdnQJGqPjM79mhAkQgjctPN7oPevD3Yqd6NDvTBKRCDWdH52CaUf88B4EsWqDB9gZhiMShyZ",
  "key17": "5KY5TLNhFBR2n3pgAmRnfhDpG8mjitUDQnxpdqLB4AixWpVfgagBzWz2iGGdSGBwQCT5aP5kTfCn6VqkfhNHidHK",
  "key18": "5sK7uBMVgiYtoWYWi3LnFKtSUHkyy7FBTQSXmST87pX8wvsvBXKhKmZqQnPHBWnisuRc4ZJtkT7zEjGXHYkAfki1",
  "key19": "2teGFHSumqmknE3zUKuLMnUZv4MYZgMPYQ9gG5PBXavpZcazMYMpmBvgCbNuVDA4sADbNSU1DrAL7PJ8ErP6y48k",
  "key20": "3TYuz18FhhCmLayopTpKuMAJsTRJaxANr7kmfpxpgcqux4drfvUjLLUMWhXkCsChkoR71xynSB4Crd8ZyB4eDT9X",
  "key21": "36wTgnJaAL52c2Toz2fcSEZLkzL6gv27NCgZ7EBXQUrQhhGf2fipvMUigSEq3eHaDr2id51mp7Z3GkPgMywoeXyP",
  "key22": "3N9hnyRM9dc4icHCidrFiZvjpnAHwKLKKQ3XJR1tWbpjkwWDgRkgj653JjDRBSnuockYQ5bz6E917ywXsQqidyeg",
  "key23": "5CekWHJFzbjJnE4koco5DMctd89dFsozWeANsGVnFeSmtr6nzSBg9skGSSQK1M2z3DRoRAHX34zd2xs5ixkxRm5c",
  "key24": "2CvkSqxCjrvdp9jtYqh8Nq2fPYJy3VHpkXzVsquWGsG7zKFBkhZqLy5QTGNTSxtPNiA6aDVbacAQcMBJxUBNKYkT",
  "key25": "3uXoSrXhh1K8f5xnVWkufjGUTZtuaWTbzCjTrrDjg42zhHVAW7BH3WN3npgYRh1AjKH64JJbcMjzoMuzZ1QEbG38",
  "key26": "21QNWvcTjQ5QRzdnErYr14NpWaCo8pbRwBhxprruYc8TrLPqQ2m3oL9Rx1wpHTKXgtu1TiMaBzM833zjfN4Y4Fze",
  "key27": "3dpiaSiYguqSsbU5MFwQy3B1CMeno53GfULrE9Q7dfa17iA99x9238puLCRyXEqfBu8xEGEBmiTUHetUtV4FVyfX",
  "key28": "3wbRTcKtArReN7VvS27kdkP5neADuRQwUPXxrFV5WMSsURkt5Z6qv3gTvt6q3pkfCvuasfq6bTiXJR3hajyd2KuA",
  "key29": "2zCMU5SwYexBb4RG24m4kUGmZboQ54X8g3eudBPgLa8mwf3p47ftTUSjYnioPjfQWTgyJWdZDhcb2cSBP6TxmuZC",
  "key30": "5DafxnTrYo9z1xFjuUBujQbuWxXrEuSb8Dxrs2L6PWtG7MHmvEDeChrRBUSTCMiK3BteJPM6J5bb87waAmwCd1RE",
  "key31": "FXkGm9aQYKsf2vTNUgbNx2pVN2einY9jBkFdnV9h8em5ykLuuTbuCwaVZWAzaqjPbhUjnuyLsSp2G7WM49kFap1",
  "key32": "2TbZK8sDSLStsMysPX8kfezhKWJAF7exd6D2k69nSupJpb3XeTBGWH5J1YSwHL4WwDPfCdR86kZfvghBL7Y6W81r",
  "key33": "g1tVtiWviwRy9pqEnqbsbmFizJ3avVkMdTBpSUtYKw86KTRyPXDtT5FvcnYJDY4oMEauZy72iCpqbKhaTx3FTPW"
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
