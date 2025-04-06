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
    "SzxDVYawL1qwsb1uCkNvrHbduJSCqmRUhxnkHZaYDNUL6bDgKgyE3Zq33gUxEQkmGjQUjbWjtw8K2n5187m4YbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NQv6VEcoC94fPxxTZEhknxHH1TcaAjF5eF9XdmhJG1CNzRLvpYTY8Ae8GGLa5QR9rNhB7RpV6jsZ79gnincupyp",
  "key1": "5A2f6W2X5tij8XxtvzJhfi9X7spLx16EikhQK7js7yNuqtBDR8o9CssUCg74qkUDK8NXPKM8zVfLmrw8Fj2a4zet",
  "key2": "366NLP3Af4P7r4xewpR3UQ8nnKe8HKPyZpaTuwUi1dJTfVccdAubt1zTGA8eADCWVYJor31KqBngUdAH3KcLKt7k",
  "key3": "3gxp4ENJqQ9czSVwfHytEGjaJAA1eepH1uRA9czoKxhptTXPJ5zpPQgmvcdRGfkwLBantTeMoDDhGgVfmnoiNZPx",
  "key4": "5eT7jwPADMKiDk6DoGL1TsKMh2oq6Vri3ZvFbxbmNE3zPTyugVDSrneHuMnnRijGcYuzKT6VDTdcZuJQrp9hSsp3",
  "key5": "22KcNRkXpCh4DEuN9cuhc7ig7mEnDJwLYbTbt5YJngZEzgmJXpbemfnCQGQxUVHnPYwLNyhv2ho7G7hc8QXKaqSK",
  "key6": "5u6Hx8ffHN6p5BoVbGMt5E4RLuMV2Hjhn6BWZb1oAfRtsJePg6ZPwWhwzDSb9iwwTJ9x18HPoaBidGo4MHTcDRJv",
  "key7": "2DqAEtSiCSS1Eb97tgdyJGLid74mRpC8zEuZSRqX25x78dMPPWDqi7MxxhSn9GQubBwvdsEsFqQrZTwygwx52nVo",
  "key8": "sM4TBsFYJDEs31x8wCcTQuY96v7yRibRWJnWxbc23Q2ooLhtBHvAZs5BwvnrCwbhbzcH9xZBjahurh9LWG4wNyi",
  "key9": "5MLviBKUCX6Atkvqbo2ax9dk2cpZAMLQerZX9CkYxdnGqtTUvoAjoRP2a6X32cVEnUBjo8r8yYVFJybxabJbxr9n",
  "key10": "3R4N1p38VAniGoYsALqgbN18MhAHztyJvp1fznFP15aLzV2Q4WVEEbbtCqjV6HxSTLuNbBrY7rpkFKLkju7fhZ2s",
  "key11": "56Ztb1kqqQqNYufB6docBqd18BQvo1mQ3hVBEeWXfBxck1sWnamUvK3GF3xJUdtppzQa1TTYPN2qgnuMzA9kwNPp",
  "key12": "tMhysu3p3Azmabowsveb3qRMXTUPf8FE4MgRjrM27JXTUZrvwtyPT14Sc5CVJEh8puH6DHKcJXycSBcR8FSLMhM",
  "key13": "4Y2TfroiVEnuaM1nauRoXMAG1GovY7F5uJ5aM7FDSXQuTu59v4iK8xGSx8bXpiXVabGVVfj8Csn9R1ZxnwPQD8wB",
  "key14": "48EVFFcBiSzYt9iGKrfGiiH8jVjPxzQqwHgzswuXd5GcdCpc4CVjMajCGdLvkHDqWjGFfiUiyPRn51S5C45r4Gss",
  "key15": "59QMvyKPDZGYwKY4yd8Axz9neVuSi542VURuLwYa2RhEzVAiXKnjfHwRyiUDwXG3uZZRKGFVBjzmJk8HA6TWaJos",
  "key16": "2ko5VYKjXTjcE2kQABtrtAWhHu5ep1sXGhFLDH5PJAG53qv42brp1TQP1A1vHWiNRXFSHqUtM7h3FSU1KrYctstY",
  "key17": "2fFwnuPYhKNcPSMV6S1VEpM9Jv8obV2N4VyYdoXkccN8Y1Jp1js3K991iBVg6FptRnEP3zMpNXzEKj4X61y5hkUd",
  "key18": "3ukfkF6NRFWuTUCmT1kGkdscAzrgZ8j2TGUAKFpWTZfQe1BMQrXzRev7CwAxDfbdUWcfzaG99A3kZ4jZHr1Jpdp3",
  "key19": "2K8LAAkAxEq2Snc8tfvrbitosHM47imMunZux2sYKDZkv8Nfvo6ezeTWXPrUqRWdzfbgABh424p4p7Sv1FrQom4u",
  "key20": "4RMGZFv2BW7tqDHxoCpHSnphPaFLeNCRa4bCU2BsfCUvefhYZM4SYN4SmmEznHSnBQRDXcQKV8L3diTYDtmbAU5o",
  "key21": "4hddNqPrphcz6qvgz5VZKwwELKZyM4DR5C8pV5bPAg9HWEm2Gna38CgBehEd1Sp8neXxt9U7pgUk2yFSLJBrajJY",
  "key22": "AAx2oSj6DuDQj58YNG1Z8vA4WiTY9KLtrqsjEiWCxitxBoJWr5gztNoEVtc3qxfhmHenxDVhvFGuowcsEUMJCWz",
  "key23": "X3tZE2Br3FKU9GAXyXdzb3hoRmaw2ZRFPXYKCFoggZJ3si9wWJh7GtcfkgwXXHoWq1WheLuhMCUE713KuUqd2RF",
  "key24": "p6kYhp6yC4ffyZr6mTG6JkgRbX5zjwbWcKbH9qkeWCt4Gu2Bgdox5FXpWjo7cES6NR5U2f5eJAPLTMY3P4nozFy",
  "key25": "5S4akfssNw4sL6kGydotBaKDdPmAgWTxPTPaYSiFFmoTsKkAao3s1FZBzVBhdXLEDH1tCGEaFY5Sj7xHjfcopmTr",
  "key26": "3wWyB682j241psttX3PK2aNgRrgnvhm9WrbEe7oQR3At1fnvqQ9qu7ppHn2qki6S48ThHURqUbu3uBhYJ6KJmnBr",
  "key27": "Nw6hryu3hxQL4S2aD2ryfK5Vaih6dyVLwRXwCex3Ec27DFDwZtrxf6MB2pTZGE4aU7kjfivhq2muMdNzd9qcASH",
  "key28": "3RG143rrUyLV3MK7QYSovWPJNze8cWYZwFokyespeNWBhhajdwTC2ghU812skPUbbq2ZCdRXYXDQAdeu24Ngv9Hc",
  "key29": "gG2Max6ELtShPCk3VpU9MmxTn5JkEsvBJAFt9fVU6dwWLycc58TUF4ogH8N2g4Ro4w8nZ1tKfx5Y5XHxsfWnUjU",
  "key30": "4N1SmbR13nqgfqmi6f1cvDaJrNy9MSysyx4aQMmSrsK6nknWx4QodMtxCkFc5YFVfCDR4889grVRubh65LFVmsU9",
  "key31": "2TBU9FCLnH5y11bg8aNBExwhFCAEVRRYPQfVzNSpqPffhyWo7Hb6x6BwRrB29d3JTJ11M1srshPW7pTZM78Q9F3x",
  "key32": "3ibu8oab7mAnSKRoQrydUutd8FQCcccMS96sjFrhGDBz8t6YKBcVe7jW1xUSEyZFnU5G6achXPymV5kFr4GpDpka"
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
