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
    "2P1pjqSht1PgTjttu7LwZVfcbfGaa7W5mVzbuSNMyLf82zf2bWVcFX1MX3J1UxxX6x4bspiEa8nisokxVffNMixq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dPnMh4T4zKnM2APknPiyYtZKvNPJZJ7WA8gaJa2tqBPnkFoZFgXoMrSEDEj1F8CWmqcySfNKQ3sBC45g9zZqtSF",
  "key1": "2xAsMRUrsWFqV6CxEEfkWn7koe8qxGb8jpoqiRQ6KRRiUFkSnp8ECkwS3nzj7KbUx82VpwZQ4GMaYBu9uJY6DWqs",
  "key2": "2XE71VmbAkgPDjBLDtdDcQKkbncR1b5KBhrXhMbS5V3GbFBSRWWDfzZ4G9WzyYbjwHKpT8tcEjDQTwcCrpMtKYQ",
  "key3": "2dWpUH7PVSiwoczerK2L1UwkQABJGY7XNCMXemLeYBVYeG6QtajNQ3rWqqm7e9obsnR1xsgMdtu21R6Zv9hymxQH",
  "key4": "5k8vVeDDdC9MJyefXYHB9SQFFB6ZA1FgThPtV6n15FZ1SXZMnbQA3XzYkSekB4BwcAJxaWL1VqGpsyUsYPeaRMB4",
  "key5": "3XgEUGcs7ZEqYHbKrQ6SDCC43Xm6xyUW4PnPVSNECsKFiUzMMvKYrRDXGb6HzrZG4Aboxcbxdpw4emUUTWJ494iP",
  "key6": "4gh4L8c1nDC1RSw1pznYXnjFQCBhRCk8wE5RUucjuhS3H6W1m4vMLpwsiR9GEt9JqoXGAcDKQGtPKeMFgRoCfuTH",
  "key7": "5Fn7praMnxS8jxp66umFSnz3asPPkkKPCtG7VmnG93wFkzfiMDhVNaTMFMfvyrbZVPWpfnrNWuGgU9yYbMpK2U9Z",
  "key8": "3F3MzM31ZsEZS7QQWnptoEr7A966EMvLkA75PhAQXviV2w2JEpERMPx2vT5iW779i5NZvs1iv1kuGNPPsPApr5Xj",
  "key9": "3EirvAboP82RkxqUFFcJSpuTNZTvcQGdikUw8DALcoTjvNaQTQCKfDQCcF7TATiFLQb5gdj4gkxHDGibEHDTcoUd",
  "key10": "hrx9jQBTPLNaUaTbbnqYEMSAZWzqUbHKkHvPmXuuSvEJnKtK7XPh3SYmDmAQZrFLauFqQEiVs4BQemHhUZuU3e9",
  "key11": "3qhrSD2d4qvfkm8cGqUry4nM2D3WKL6v8q1NaKKaF7yNUR8xiJ14qydHgZVGmKj7V3GtMLgCgA3zWFbwL4wY5kz5",
  "key12": "5gYduR1fhwNwdtSZZdE8u1YiGseSeywuHaynPZFMVeJFdqVigd7ZG1JgkAMWrtWm6LVPk4C4Q8T4iMnfPmcwkv2z",
  "key13": "3J1H3BHhDni7se4845WwhuJvHVzw3nGh4QgQrhp54xQEwwmMdTYZrvLqxEqPercpUmQ5yN2VGfYr4sNHQnskQESv",
  "key14": "2jADjyFmjKfTP8WsJ1LDFTVoZU29CNSp7PzpBYQWQqT1X4vqWTDY6jngVKGkxrHe9H4nBvnMhK8ssWKTrkSCLmsP",
  "key15": "35QUYH3gcKiXCj8YMSHNCx8TXR7VwkDqhfovsojof5mS4QDPR6WRTPWQfm4BcomxQCtaoUidYWrLNiHqtmSwy7ig",
  "key16": "TbDrRYPGzZ9RvCW1aYhj1phEcHFPiR7pjvoqqYhJyKcy5xdhujb2A5tPVS2cgc9Kp6owGeHRNaVwtbQubMvvaBA",
  "key17": "3YVvt5m9rMd8gWgjF3gw2WUjbz5z4AA1kNDhQsW7GqbCLa1kcLa5Lft6xhZvj9PGo1y9VL4TCEh6VCc2vbagZjr7",
  "key18": "4a1XNyABu2dbuBthPdxbfaw16PuNWirULXAgX7KrhUALdP56K2NPghaQwAUhj4yTp9gce2T98gVY7QZJCPjryrJi",
  "key19": "3Z1iJUEQ1MgAdVqTqXysqeBnzBCX3T7Jq1v9N9XexC8pCaxcT4iboFVKBWPn6hnNTC35bhS5a4iUmRCAP9DrdYun",
  "key20": "5KWKtGZi7PnYHtycWi599Mz5KBCjJeCqBjMyMdgJJdP4FBprAwufF1V5rhksV6bL314k1pgLeQMY5hpVKvSFeY4P",
  "key21": "5c8p6SYxNaaQs6RKn4xufUhdXuds2tBwH5mVSrU8iiHjTRjcNkgXCq5zTP4QHX8ivcULBKramwpowqK89fEpoo6Y",
  "key22": "1Cbw2mqTqhc2x3xCW8XsCPB5Pd3c7iZ8d6HZx5Wx4bKTrCdFhtx5gSDT9DNZgBJFgZ1jPCV9ntoeWP3RsNdQv95",
  "key23": "3Ur2GiVB7frD9im55vEVkuuGY42EB2pDhhgUfggrNun2sf59wbyfy6HjCJsjj6HHs3VmdMSuLFWRNwsVbX3rfnsN",
  "key24": "2oiESFawxurTBZo8TGfwd8AuUYiid3VvwfspseZ39JAPunx8AbXAsqH8qGUtmd4Hejy7eqJGNDuYue55a8kaDjtq",
  "key25": "6125zLEkcMnnqVVzoGnicZ7BsfczTM5ozR4VNtJspiFqMjPikUTbLk7pLbydwXU4dhodGvhnBwnsLQ4CNYE6LhdS",
  "key26": "2L94Hhyxm82RhrvYqPKLaXN77HgAfhsbp1AbrzrbEcURRJEsHW1GfTsyGvWP22roVwcouhwcFBNng57uBzk4zeyj",
  "key27": "4J75J8V1n8UznRsFsyc8JeGhF5GX75aan3KVrdgyK8eDBEspXH4Rsz76C9oSvD1ChKwWLDxCtLs4FpqoDhcdDGAh",
  "key28": "5JGtqXkT8RCWxi2SthEST1VKana4EDAwgpoiF3Ah4LGUtmaniegCzVqMpmeNwHsmUxcfbTndKCJgty1QeJbJCcgZ",
  "key29": "3ACTtUkPTC6FuzdmCX2RFQ7CCz5mD4zL7k9DvPfuc8ZBaPHNdWGses5X77THZ7EYQD6ktxQ2ctdLUnynm15A3QeD",
  "key30": "34kwSL3x3uuRuqafXJPEwuiVz8e29QCjXwfdMzb9qy1i3Qss1MTrkjds2WgX2ixU5rRpSQcAEYVmnuq8QprVCZ8G",
  "key31": "4fxPEu7RvssQdmTxXTMFAVrxz5QgzbsJiEqDcjvBDWJBgTMiZ21jaTWLndoveS5AFkVTucGamMqNakugwpW6xC1w",
  "key32": "5T3Rpt9HGbuKJxDTD4sjwwamFgKcHRUvBMGU5NQdiJ8U46kb8wa84mnPfzFjBApR1166dJXZi3cYgy4mPFWoAV8G",
  "key33": "3xRGPwoDy3XubmWgbXfGx3mMZgGSMmnjfethLH1FAsQAHaFoWiBPitXBZtDVp41g4TyA9sDAaNZWMqvNqidnMhQ5"
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
