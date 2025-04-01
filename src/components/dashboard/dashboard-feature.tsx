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
    "4XeU8g1EoahCpDF4YDdtdBVCtVPTzspwUyVAV1jpXSnVaKvN4uRfVvfGbzNpS6bnGfXFQ23KtTnaPvoJMtexfkvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eb9usSYNW7Z9s3TTaksGDWnr7rCPAV4LVi1XpccQxMPH8TdNs2cEPtb2VEnJQTC5ChaVJEwgdp3fPAop1gxJ1sV",
  "key1": "TwbasKCRegBSTYAb9EfmetQS7Y93ji2nMRLHVZ6HjXbRo3AdDGg8sRhiWJcDm8MeMiHMyihJJyQQkx7AhYSLpSS",
  "key2": "4tMjsj9b1XnNHooaExhWcNfiRQSpwVphreRLur9GrmMiCTkuJviZSMYpvsTSVFwSoychfpsjjgFZcTyzcfB9pCbq",
  "key3": "2va2LgYK6JZV2nNSGRHZKBQexerC1N9p5Hy5kGcYC9nMXusjJYRAo2LW4WPbDNBdMt6fkh88eniWFcWQ3doiPcwm",
  "key4": "2FxQD3KRgiE8QmWc6dvEewhc9xiBJWYkZENWBhpDs4usgbesYSVKeqy9QSb4ZcLmW3oxstjtobW83dWJF4RXjpwo",
  "key5": "zBdLGA3tbbc5Jyb9nRcqtdTVGgPe8AD3S9UjBhwB9iemXXEYNx589eEYVNXHcvLKM8nVnSDjbpagrTEiAab1L9M",
  "key6": "YZzzogWLrrwXLpHgiZVRYKNUkP4n48FoD9n9JrfbyQBqxUYTgPe3UF2ZLcSxteTU1d4145F1EySw5vxz2LEidTm",
  "key7": "3dW7aPm6cW1XjduyoavZop8msG2vY8L8Ffj7htogr6DTtzvBct96w8dDNrj9bHi8QpYr2dhaqARXhdAZq7kaWTtL",
  "key8": "2HfLtk6RvzEdp4G8rvsmD8bYSYoS4aYNqe5crUx81H1e1fh3xJERbCY2VgmqYpSGyuceyTkT4EFqr3mLpzQYNq5Q",
  "key9": "5QgbsY3hd9gU3KMAf21kDSKfDs1BYcRMwgyqMfwc7dqkrmaKWWnaED4G49dn762hPrVDRaYRVVvq3BeujXByC3qy",
  "key10": "4KWYxTAcXaxD11ie6VSt1RiVLiLpiExLM39p2icJKVMNiJb9Hf2SN2nqfWQ46jzxBWNZYk7v5nqvfKaftBjc8pcs",
  "key11": "obgbkYmnRW9JtwjUz9DRBMhj7zW6faJmXyWqUggWGVAgz2GMnqCrytN7sSngV8KYtQaJX27pham6Ce6tZ4Y4Mx5",
  "key12": "3qXeuhPsiJWGTtAc8FauiuZb49wHdVT8WcsKmFe5ddF7ahExz1yMMCE8ePdYuGMZMq7wLJtjCz6V5ZM3teFFDn4d",
  "key13": "4dX7kAZQDZWubAcXU2GGj9b5jm68tEBrUBuy2222M8CibgWSmQpjWvJDvA4M1XUryxMxCzSD1PQbf2MqfCNseVKN",
  "key14": "5CWmHd34VXfQA6UpLyUrvBtEgyRkPPWybDKzYnAsrFHns5TV3a8xs647v6xxTy2VNcvnSJtEhLpYmc2p9uFTaGAP",
  "key15": "41nq9n8ipaTPS822LwwqxQjPcvChZU4j6WKxsWwCBoYn9sdp2RgJXUv7oeL93X88urAxeHM3A6kSK5SHADyvXCyM",
  "key16": "3QrMBbz2wNAncbFWx7Cmvk2Fy4hnwoUsyjsoHYw8zRhSUXS11TiRwgkWQRyS1HLEiiHe9MUtRv6BJX758tnUQ6JB",
  "key17": "42ADNKGcYm4jsfqy56LrKrq8QPcieiv9juNFpntSWqRJK3dc9NxHt52vVo1MikRQrk6iVNruCNyJJLRFiRAuC1de",
  "key18": "2KFEfExsAdefz8dNhg5D5ZBc2RqV9JeXiBc26hP6EqLG71DaPLdrjNXfqHBo8NhHvYWMBzMCJHVhb8mgc3jpMDL5",
  "key19": "64sWBtHP5YJXYBAmfY2qAEAcN5retWFRPnFhedhg6jNAhpM6bfABc7Hhxy6KiqfwH8uEtecQuHyZ7ePisnSvuzby",
  "key20": "3yapNqWVSWHygBnydFtk2wpMqSZPvPjheFeSo8RkVqYNCVeZwpRbbQGaSofAw7kC8H9DUawhnxMh8XkGQAQDdXJV",
  "key21": "3dKzhzs3cHaH94BhzVQwihzUbo2LqJuPJVsBhJdiUSEVdbkwGBTyATV8T5dBRBDoy17QDLpHfCtw9nUWhJbrkbT8",
  "key22": "55913M9yreAsrw3LkzcoNxDufGW8s5STbiMFA7TK9ok2PrtBkn1Gi9xaHpM15CXnSeaG8zgq2zFrc7pA825LZTxG",
  "key23": "4RTnzsmDU88SEUQ89PKeGM1k4g9aSiJX2wGaofF3Sz4uQVDo1xWKCfBinDFjpK9DpfKnyZ95o7VSK7w3zLzfj8B9",
  "key24": "fDwmDWkuWuQXB5EhqWJxhQKMhJAxNbFeL6XaMDR4dJ1nri4QBe45XPUffrwScwzVFPuM2JgACxCsYrSmaugvXaP",
  "key25": "5137U6Qk7XXkAGiXeNHPTXGAt44WngxzPiQ8VtuSW31rXAyXhvb8Li8vfpMedQrpPwhp7GzcudPbpTggHEVszaHq",
  "key26": "5MEotHBfEnkd3CXMouAPUm77UaduMAzXY8BZSQM1Z3gS8ndzibwxuY42XTCaUD4Pif6XGrcc7h7X8f4XqCe74Asj",
  "key27": "66He8T7Jf29Yt6mbq23DQprA3T3PcsiNah9WPFra2cfUxZp4MtB64JbK72NKvocbLVP6hpr7wBd4RCRvmvdY9sNX",
  "key28": "4m8tQvktBmd7Ar9ApR87fWkKJQyPzbEiN7uAX56jPVaHigTAd1MauPGWAzzJ1SUP3hADemzq8oSWbjCTrSWNBcAM",
  "key29": "3n2ugRQ1sEQJ2t7vFxWTSzUZERCynT4XNoMeary6ynPqEaxkHo1Nqan1YZKaVnPzzVRz75EDxKLpfjS5Z67Ya6Wz",
  "key30": "2fbBiWwSeoepWZiiR2vAckUPrYJdLtaeiuVUXvK4Mjujt1kwnQjizRB1BTrb66FwkkYSdxfC1jNagfuZPqyGarwc",
  "key31": "2HikSdxuXm4qsjhx46ULDhqudedeMCnbaLUerij7c5YyfzkhMkwLGqYbuytf4x6h1iB5durPewBbXJwK59ACBGFd",
  "key32": "2w6FvBrLLUMp1EzGa2oBHnLBf78xumM8f3TqNDqhz9EDQRS6kEFircN3NdA7fCeq1r9KiDWSHw6cCQ9FFLcBehy4",
  "key33": "29A2KvM7wyrRXsx7QdVeGXTGtBSQWkgwSSqJi5DmFWwVdkhsRBNTBudVYG3vDQww9S2Ffti8jFhNfxw3Pve1uWqB"
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
