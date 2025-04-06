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
    "RA6BKN6XC15pPtR9fTZQPJUWQC9Su6ADNUX63JrJUBDLJ5BZSbjvP5SskBVCDV2YuxTQAVoDQmorqZDJdbZDxqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2enUbsqQ5yd5N6vbzSpT5Wsm1fujoSK9Fus9oup3FGAWyqTbdycypovRCDuAJ89HaT9SzvGWQpjxoQMkAhCEe6p6",
  "key1": "329AmrcpQjipwCZWmZY1T5gfmo24UT4NV2bmNhRTebcDVDWsgFrAP6SzySg3VgveBjPNkqKCJx7f59LHZLaYSWKs",
  "key2": "3jXcqMxRL2CHPqLP41H1vTaZN1rELrzDZimQJa7Z1c8a2Dog2iTd6iEj5gevvxxaBMMNFap151ns7n2mkMqJ1Vd9",
  "key3": "5jcm28rK9fTFcRG38FJ1EBZJozRPLgVzELXdTRFWUZpCpN2XgpMQvMWeiub3L4kdwgEgDxartqTyqvNhNkMNwTHZ",
  "key4": "28UHRFe1Dzudak9RZqSdP5ruXDRhEbbN2y12ipaLPk2zptSXrKf8TurUmYQnH5urLnUnjV55tr1KUMuR3Ctk3VuQ",
  "key5": "3YTRKZ3PZFTh9T8XrjcfoJdYmQmbDwZTbU5haqxLpCePagk8fVi75Xit7193tMwYBU9nbs9RWZb7FEKkm27QNGRW",
  "key6": "66wi8w3CZTEuGRx9wrc1rAdTtcDKWWjhsQorocQfoE14mMaaoCJtfP9jyMxvb1RbZMzW4qUqwnDdCou3JuhgCEKw",
  "key7": "2nRoAtPghSq7iLh1mjXLLDfRBU4KYTxeArtyfVfEweeuMscnLmuUNw1FnKYWgrV5vGqUkdFhzc6AwubwGG3Wxymj",
  "key8": "2PuSHTrohrCnRzWAeWZQCs5ERMzSMBtmas94QKJ3pfk4A3nuQ56PKtARDnXon496WD4tvuZAEf9tfXYRHp4GNuqY",
  "key9": "2m9zRt7UquSXa9zk5qj88qAepX777CXGPXfJRGahxghAVRbCYyT2x9M2QyvdyU8qAxRHssuA9mdKxMocUj5AyprP",
  "key10": "4LjHSCJEBEoYtQNGX3qKJqAvEMbmF6REJNYhYxCpjcuLoTdbBZsmEmJbvmjNroYZCfRPx5wzhL2TgJLjjWaLQjyN",
  "key11": "3JKcVQEeGcpYSXEBBuNXZj4KxE33CwYSHnYcikbtdfXoXFUXHhGy2CHqdDobt4NDgHFLdx3LnwwL9VZWSW6Km5mK",
  "key12": "2Z5tgVXbtVDWSeHAt45Gbv3decDHmcVVuPzpnzTcEne7tpGsDzrs6BiBj215dPMjMVksaUoBL2GtqXDkfntNVqJJ",
  "key13": "3Mj4ZX9TEsWgvmkCcYPEGc1Dnbh6CjtSTPXsurW4fRWgaY2KW9UF836JTogbNcXh5EVD2bZH4m53xdTbhvbf7sd7",
  "key14": "67GPYScZmjAB8qL5NR96pdU5WN43tk98gEWKdgM5JxgEyf8JQngrW3B2oZBoWgyxqWjFKhEa1XPf583oeQHLKW5s",
  "key15": "5nxy3bPTw6oHNPbx634gEReQUAwdEqd152UkuqKdi9QaKFGpRmEvUFXoStDs1Azki8cchgWs95DYX2WF2MzvsdKi",
  "key16": "5cQD78LitmDPNGH2cr7wRS9tCCYS6XnQr54r1DMmWZnuBWKMFprbmFT6Jwhs5zPbnuSrv2RxuoevjbyWHzQkCdRy",
  "key17": "41maHQjut7hpXgeRvN4WCE6f3dkELY5FBYswSVGizQod7MtrN2kbAGWX2YPZTimB6UeE8baryJcXB5gZNUiriQUC",
  "key18": "3qpCUrUtEPTmE9fwjWL7CSruSEPtbRJZFHdupWFoH67HNabR5AHLvUmurFhFxsJfz57SuDiWQvLKfWYfYmFHWetT",
  "key19": "3yvjbmTsApoWPVQGvFKf3KdeSLo3cNoPNFsgcgoahsfV6FzXas7iiJX8hfphUHzkSkJace8srybnjgkhxEVeRUft",
  "key20": "3dvm96GWvdVRRgkCdejMFzgtEjdSJnwg8YMsMNASuDpBPumTusKqEZGYKh14SAZhZjPnAD2LG2Tqt6EHi7kq2K4N",
  "key21": "3yV51dTzH25dL6dt84noiu7Atf6RxQ48b9fKTMRy2KoRQnXj18hUt1vnNojDjV3LsaYxgBHaN27tatBs5UKWggWm",
  "key22": "2LWDtSxaAdkAZe5WTqAWw7Hr95hLFq4s3HsteZvEuB7XU2CFr2mwXfDpnDdGrzH52x4k7QcUSrB2EJKB35FMTuBy",
  "key23": "MSg4UQGYP1aU7GaAQquHBuPQhXs5PNPyeXMTVs9H2YEfMDP3f7hgnbQWLBWJNRACsg5ekPvo1qMAzq1xz2AAvdY",
  "key24": "4mH8NyqHQbUppEz6fhzrAFhwW5N9rKwCbVWs1DrkskFXTm7ZhT6RJJGyS6G7SNHqC6NY3f2z1C1Ztx7FvX8UKLqF",
  "key25": "Qta1Lgxb3mFjehitsybSjF56r5CPX9ugqMgH8mn2wy2s9XWyCFLcHCTtLguGbr9fvxhdVvp1atnF8ExpHhE9HVu",
  "key26": "5GAuvmNLxhCRB1FkVRJ7iKbtECcECcMU567hd1FYU9fhePzNvDKUR3QPisu21CZs5qMgJcS6fGHzcqFXoHuhxiFo",
  "key27": "UTGNa51iHap2BVPd54edUBG2xw7aDPJuEoNaptEX6q6Gi5RSyGskuJjBSNporvjzT57bEeDdrpnt3stvSuaXSSo",
  "key28": "5pLqjoQWPDo4kDQTGMsSLbgmea65QDp6NuMm8dixRM2nBddr7oon2BDkxuXquRPgbMTAgoGk9j5kWT6VZpcDfHFs"
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
