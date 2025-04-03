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
    "1wG6wdyQNmoj49g8crwJTvvUSiwMLQjzcKjsRN6Q8qCzb6AnqUkAfnAUDQ3aakRuFXRsyeTkxkaTmdczszLHiuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Qfw9PMeQznYagT3P2wwUeHLfKP9MHGDXuHgaojqUf7WrBYgAX6Lsk8M73do9V8opcsq3TWVjVcgjE3KyfYvE7B",
  "key1": "5gUvpDZ28P7ND6yxkuU5hg966xQP2YSxdmmZHqbds7tmFPt5H4dKhuJm7kfnFC2gGeCUs1rY9Fwq8FRdHHezmVAC",
  "key2": "52G2iyRCdeXbxzXytjbXqkwMV4XvyxY7SW1cYEaZdbnckBYSgo11dGXrmreTCkpRWzRWFS4WaGCezhiv2mNND1jv",
  "key3": "279M9uvFm89oWVem9JWX8KWWZ3vYqRm9RWXGPYGAdJ2sTDGsEaQsXaFBWnwtYH6mTpSRoyvyfGUCuV4ECVVKoG67",
  "key4": "i9RQG1rMPoo8b1CTMGfmZNHqLjUvPC9pYSpAyBU27EUt5UcAFkrcbyBVUXrXu911CcJZAarCDqAq8t5pCAJQ1Ny",
  "key5": "4X6Uc5nuKexyq77FTsLMMe2Uzq8PzNLGwh8zLbfv3P5gVrDfcqv9PjkoeHhxQGppbWh6SSrSE8uVXRKG2X72jhBj",
  "key6": "44Mgf4NYtcLTZ4zXyMFEtJayCDeT8Rc5ovTUeWM57cY8531MJPbWnE5RoPQAEEzWULeGZtDnaWqvhWvMwaEVDRRj",
  "key7": "5KZe4q3i7SRL3x71NAMTfitKg8W6ReMsfRUPgicJuBNLjeeBddB6Ni25Ef5ayZJyzvGHMaZKbGR7ftXZUMxB1x7m",
  "key8": "2N3LqrTnZybidthko6WFLqxNXk8jCGPJVjFdoCUdYqiYTTBT2oh1ajCTHYaFtJdpmrLxmThDJt5T1UGFAxASx7YA",
  "key9": "2TaxX489pw8JVGZGaUNZfrm9GFDDxPWEwpL8puGq3pf1NMJh7wgr4G1RsfFRf8WTdcg7BPs6twxdwpyK4jUcXqGG",
  "key10": "4yJijtqYt6Di4ioC2H2DzzLTyvaJVbQyi7AqcyhpvTa9AppYHiKSX4n6rnzTGMN5pGxhJaDY6EzUrVJA7xM7sNxd",
  "key11": "YdR6cxmMemz8w6P92rGZEsLTPvQKGhNWuLvYiv8xiXxibT1EsdBSswLrd73h2hR9Wuwm1thAPJS2U3sazp3spmb",
  "key12": "2PWQJQX4pvHoXvu8WRwhbPFWaNDtbPKoPHTgFzYKNbFsCJsCXYDyiZY6HdHfcoNFMXCVXPuQZYadDqgBAwAbzLFp",
  "key13": "DGvbkJcHetzAsfj4wkkJC6sdmFrmPeCJFKbDap452VkxnEXduxBf1YMvSfm3Vc1rfJe9epDDBJXk5koFYMCrs4f",
  "key14": "4sKrAFmLaiohJu8THoCAFiwVP89E7ehGsRc9rz6ntqkrQpruwQs9CV9hUb2pa3qRckfHYzxyqhXCuFU8JS9gV2pp",
  "key15": "3zokYV1zpX6AuHR5vygy93VjEhj6a5EwZuTKvMVih1pDgGfRMNZrYykB97BNsHR8VnaCL6oeM1C714aMxW5wXsSk",
  "key16": "4YDUmvMJ9KFBsmV9ZDjVwcuFrc5akBmdpPpGo2ZpgBtPBhX3vGzYK1nqfzta1gDUsvcxRNYY9bNVxPPGuYxGFwXc",
  "key17": "3h5muNwERXH7icfsYDYF6M2ktQGXiLDCfoWepVy9fq8WVBn3KJGqEtZB8kck9YzFpzYQSdBNDzP2oKooAteEM4UL",
  "key18": "GzJnxm73Z4je1Kvpep8PVeYWXv6WofCsYf4b5D8ftJEmNa5DbjRQyELdUVHAvL8w6obowVr4j7kRZodcKWizYQz",
  "key19": "45AVD3yiYuf53JSGFKtvfx8F5RgGn6KEhkgPBdP5VsAFiLga34D344NeLU15Ff2eXrs34tqqQD2sz7GUcRezbT7W",
  "key20": "4wzRHFfVv1Pamw9tTAgFf6MUYfYBsxJeDz12h3Mh7jXhm5s889RT5iMWPBCLmaXB3Sqn4iGgWdKpoRwbvyghvn4K",
  "key21": "2bqgVhMAGPpBojHw6M8AVA5Q9YVkWAonXQEVjiYSDE2jTvcetULvsDEi7hp3qKHTnUL7vV1ZNw5stawXcZj28JhW",
  "key22": "532939Sv2MywFqg1NKZ4WSwGoAFAnEEHzWzJQGXyPW3K2URoof9FJSYj25sm1Vi2eCWZ423QwVhY7npxsjfDm7R2",
  "key23": "38YXHgNthsWsckPURFYky72MuCVPSZYBDuuAxdueat1mWwuHWgXj49qDfp8re2FD9RHPo4hRMtGyyvegzUx7Qpyp",
  "key24": "3Yaxu9y3jbGcit46EFsxauZUUNCJJt5VZ9Rr6YpW7p9fEqzASoBZQV9wJFJwbkeQec1SVAJUj9Ar9Wv6i8MyTxvF",
  "key25": "56fjYoDMuTDfyuTjQfoC7p6zU6XJiPZo3UNnchogesTdenVfwh1YjE459xyovK9dZ5fG7xkn2fQuvQwx6moKbMgV",
  "key26": "2fa4CxTZwNwnhjmPZ8uy3B42mqBDtuvVwbH7g5jMxCNWsHnCBi4D72DHgUeUsHyDYMoxejmagw9r34jCaPwjJZnS",
  "key27": "4LMWX7BiFRGGMeEsYPmzpu9j6xUufM2izmBJbBgYu64EjAbSDdEBSUMyp6HmU2Hj7PPRpPUNyyYod7y4uEzqo5r9",
  "key28": "27JKNRUraGpZricJja5puXWtkpGVGbGsQGRKjbvjNGksnzpUNY7UtF5B5ab3M2MTLjkf2eDzuEJfvQccQDRfxYfg"
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
