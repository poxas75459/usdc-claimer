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
    "woqNH8vkHf2eerUuwvs3rgLsMyc6WWcXprzmRhoufNH5HNymMk5yuLGfstSSfEPfeXoh5eQMoZD9bSqjNyTXMSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4saD9HpV2Mg2csATNrDEL7AnbubDRSo9vjkC2XHAy9KCzM1AWuRDK1DEXTub3JGaDmYPFqybxYsswVLvHZU7smM7",
  "key1": "at85o5vTg35vF7et6Zby1xtJiAFZ6TLCakhmHmPQ825j6ZqRA8Prrs2p6HoZ3LRxMffgX5RDFAz28pqFa8hPfTk",
  "key2": "5fev5jbtbvRHGRb7zCsoYFgGdR1CimhNeimELvyg3Y5QXXtvbL2dTMjsuXJ6SaCbVxQEHb6NXBgZ6gvoHvTiEUNY",
  "key3": "4tgsE6nEtHf5AYfUXiaKwxHHrGj33RqgwWRyPVAS42Q1cXqGMcb3mjUXuJdWjQghK7REzBNxFVHv9akdDQM6uSGM",
  "key4": "4hPHJvYkFXmhpn9fj6Bb3JPsGohVGfQ3CnrBm6Ej3UE2sq2zaq6bYGRHybVLTjaUArBLjc3fppMaKY4jMggYYusu",
  "key5": "4jGDKeayyTh43YF6kcUc6SpxBwcyid8LeJAJTNkQ3MCBbNo91KqFxPvGsWZY6C9sL3FBCsiPW6UztawrDHKKSAWm",
  "key6": "3P4RT2PcX9tLNyqgn5eiqjLZjk7r1CpMEoob6jaByHqsouAd1BBZK7NJtXAqRAjndUjbooKpae8tcusjre1oCYjr",
  "key7": "65fgp4r1yQmukqnwVLvwwB8SBeiVGmSjm4g9NuoMQ7o71tNi3Vc43mUnW343cV3qa7Qx758g5ELidYfpFQyQGkeL",
  "key8": "taedjZURH687xd8AASgxV3P7awP8DDnsBzpnJpA84EKZvPMYLxQ67GcrDvYH4hQmQPedJqsymSmZ9FB3Yqin8fB",
  "key9": "466TcVS1EW8jE4g8u5YsKVkd87d53BvicHf629e76XitdZPXmVHUWpigKRrcizVFZhFr3Brc2cJP8oyrW7qkMvfW",
  "key10": "2KhHNe7jFUGgKCsm1vkZwVS2chEdgmc9VfqoqU8tmCFpn6XrTAqxCnKMqKpWjTP1Jz9DhDBWStW4HZ5m2pxHGpy4",
  "key11": "28qdGBWF8nQTX1tY6yqvxRETT7aHRheMUum2Ew7VwoSa8D1BPcZzQZmwDsccpWeEuUMQV9XFWyVcQKNAEqvDkHct",
  "key12": "2DKf37qSSv3pAT4WFySxNwcedoNKthCFvTVzcAcPJrcMw5Q5TTES8osZmo4Kwivy5A6nyYdrhnXJTJs43myh2Mjs",
  "key13": "5FU6yFJCr9KX1h74QJUYgENvu522hQAaPBo8tgSsdMLSksjd7Xu7KmenWAhiBJNQVTGjRX3LsSUk2UvCLini1miE",
  "key14": "4RWTTeBJG5ppAtjBRU7Jz4d824UgUugUCa72JWfAdEcXkmLXKvCbkDUJtY1z2rne4DKKyfHZXsotSo9y94bM9mgJ",
  "key15": "aYSSeHP27dxdaGbdVBfzCvCTFKhLYb2PTsyWassRQ8pkyxKpqivKovBhxmArVAG2cBVRU9Qe217kFhiTo4tKa6Z",
  "key16": "3JxDbP1N7pLwmdFZhzft18nsp17QwxNtkowPZivyu5JNwW6YJaBFaUUfbuYZNMX9gC1pDpGUs71KD9yk8uURZUvq",
  "key17": "2EANcsBv71s5n469XLxgzow8yDYNLxZoMYyTKxSbto64xx1kaSUeiEscWPVNR6QZRZSbag36MoL5Gf68cMWoRKyf",
  "key18": "5EvEkDcN9Egz5weqe2bQX4i2KRZLZTz3mFjstRxFKX9FoypBs8ABzuC4FdnU6EtNEjMi1nd8rbmBtx8mYjbAJTCt",
  "key19": "4ZVibrksqrm1hxGQEFh8fn9QTuN825wXx6avZtZV71ADLdSAqxe15YrKoT3vTQzLZPyqoUCv98dMh8ufwErQdgtP",
  "key20": "21aetYoEnq92EYKm3CmPnWTeCSQFtpcQR3wzcNc8QVVyEgtJQyDSzH7XpQ9BDNTUV63wbSo7yX3wvDzMJcrrRWRU",
  "key21": "3WfTJGwwkrdfWVaWx9igP9WhnJ8HrAZ7Daeb3zuNmSf8di8vssEvNEan6gWS88BQ5pZfZwxnePZmGgQoMri45ukz",
  "key22": "4Bk8L4y3HBLa4zRpQ5SGrYWadYVzLyVEq6b7TtM32HBPgYDQ7bugTfKFH85jsyaXEVZVgtGfT8zxw3S66U57M7AB",
  "key23": "66v8bzHc9kuLWSPqHgXZY2ieE6iRS2kso3AJVDgLwjpYhwxCU8o9b4edb4zYUHyjK6PE4G6UC27YumAGPt11LJ2f",
  "key24": "3peMVq8oYESAq6CDR69LxiZP3kgwziejk7oofYSiaoJaRT2UDxWrEYDJFvPhne4f1TRk6KJerXSw4Jst78Lhy752",
  "key25": "23LQtQ3yU8MnaE8Vd5vFnqRUDSeoP41uBr9D6XuspczYr6xetXPNCWNMEd3GjJ2BhYFsWtDQePen7sVP6hw2TfyC",
  "key26": "hKu44a5tUrbWLNhPgH1UZME9nH9h6KMrXKVaDstHpMwxRSfd9H4QzNyVrBbBVqK1RzVmVkoV6nqqP5vKhXyDu37",
  "key27": "4gfoQL5wCF2dG3mzBLRAfqZS1qrNBHp6QJzaUsSxLhYtnkDjCsEDV5GfZzyvhM7u2hg4DtytSR9A5Gy2yk13bNhH"
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
