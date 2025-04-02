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
    "3mEw7qgJZHjt8Mu3wAPZwvup1sychKkjb3H6v2sX4g1QYRwhT7VDH2UJuxT2xUEz4C3w1Egh2VPErPYJVJ1CN9Dk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cxnTRBpnUgQnPcE9WtNDXVAPhuMbxf8xGzE1h3nDEixYv24UapqttMtdiKXFgE8XUK3EY9odHpxA3CVTpSiV6sS",
  "key1": "5P5SgJV6JfERZ2GiANiQmmTb1LuzxWmBzLVt3QYEqvMcooCYUFoWAGyfPfhJdKR9zomZbnkmmUCSAjGrFNsSTgLH",
  "key2": "4Rh3GUBGDcs2AbpuucJJCvpjvrVfzgADRt1TsFoy6VAKWmDKTiKanFmMsfyoWB75jmJyuFEDBu2DUBeXZUzStLai",
  "key3": "cx3xfLQUJEPCHEWBkyRBzZBi273oWNTfwPPRZnuoXQ2J6rypjbkRwsxeFkuyg2E5pXyBSsB9BwAbXDz8xVCFu2H",
  "key4": "zpUiWpLs1GG5s5G4GRbphcsnCbuTQiEcJ9CsRLL8SnauwNeqKGYRw4FL2Rtqg6Qdt1qwSdSGKEPqjnUYBnTeJdR",
  "key5": "4P3HXKWECabRKFby1woWVAi8bdURBqohnXwm7Ms5mM3VCGBpH8JborEtbaoSjD2FZd6ZExC9eBpuWyWPcypuYuSd",
  "key6": "2zkXuvLVNrngCnRhghh5HbyoLG1XmdukoBwiY5dpuZj4SyvamdNhjwLoGDw26P9g6qK1feL7faKgrVfCPjNtfy3X",
  "key7": "D4eRH5idttV7xVD9W5Kjdx5KQbbFLFFLypGqWdvaA9cvMzETbriYNEvLYHGr3BAuVUoeDzoPoHdA6UfSpyfdgLq",
  "key8": "3ny9LGyShNEut5aELiUumwvLDzu2FUgbtLFzkKucJJ6GPdcMj1WmUbZvqS6EvPnvzxRyWhM6dMMZyX1nmPgc8FDc",
  "key9": "bnKWgrBayGkS62EwFWftkuQB63aMoSfizgHFKV1oemju3mTZXbnVTFdmkw2i7rPnwozNu1PCMJ185iKbzzD4Vkg",
  "key10": "6KyBmY6gdghCPYJrv6Fyg13AMn23yc65MU2af1dXHYWZ9UGbgnd9nYzRya3jzs9prsPF3grywUuQXg8M1aYehhE",
  "key11": "2WUwBQfGdSZSpi1W9eokxyjWnWmDuvwmTsi4XbUjBQBddNWktUMc2Bpi4babKiEuTCkjMFEcABPRN6nU4YB1n6eH",
  "key12": "42XQTdjKogTykYyrBLKGci1Z453Lw3X2MaPLhcLuE5gthsGmMn2xa6ra8KQxPuCgQzJBu4quaYLUBvwoaxEbV5U8",
  "key13": "oYkxjRuB8493MPo95HZQmJrHcUodUbGCNw82m6hs5UBJqx3Vw9Jymh98XhLZXbUxiNFhvZJvqaLaCK1AcDWUHtk",
  "key14": "4t5JytEwQvjR1EKpsVyXDam5YHKnysx6TuLq4ctwWAyjnwi18Z5owedde4Mu9t53pay816t9EogeLV3iwDEUz6oS",
  "key15": "2LLCFWqQqCznF8ZDRA8DYRi1FZYi2ezJyGgnvDecMwXnMu5AFXRUWisyv9ArZ3bZ435a3tdikfgKsJ18otsM3UEo",
  "key16": "2XAKQBzDVSAE6CCCuthE23pwXw3M9GrZz143bxiQ3fAeq55Bv6ExBDjwWMQZNWGofwsqVEJpWAAkuKGVGEXD11HP",
  "key17": "3MbXAkF5aKqDMGcRBEiHJhLeckxs8bC56nkqiCoPT9VEyUpSKyyZHMoRjdXYznLYrZ3mr1q17AwbUkzL3MQoxsrt",
  "key18": "TqMdgQoGbDjXQxn9sNVzrc2kRhD5ZE4uRc6P8rU8hgMj15PUomtDZfzfu3ezEbT7kwjYEyzaAqiTchskJqgYvPT",
  "key19": "2JyhbHjmgSBaNNzgs611SXdy8DruKp4X6YFg789zb8Krvq5L6vB1JaxyVMGBuh8NzRmTPy7WodDWsghdjYDuuaN",
  "key20": "39pjHfdjkionu8vCpUfJDiaFNChuVV4f6P2vHtTahTDyxgyabHDEk2NU8Z3mtnXmi8WhKBJtzqurh4zFZ2rVDxaW",
  "key21": "FSztZeBHTB1idjSKGEjdxiVmv24fPiu4jV9x4jSg9iar7YRAgdc58czpygdAKKhM3G498eprZ8HSfHH5qzNK313",
  "key22": "2EXPqMZi5qoLLYEJcsy4pG6E1QzNS2od2pmkb52DNSkYm8MJgteb6FUZdhan9Tj1FVo6D8EmP25VrxzuN8DfRSaq",
  "key23": "3jP3csu77SDzZ2uNgEUApo8iX7kx7yCmripgsua7ESp1sDdKebzxxyELv477YseSoiMX4c81nvekw675GQ4sddUf",
  "key24": "4eJvNpfqBAN74oWjaUS1okLGQXTpp8AUu5GSZXnKeZH1pBJu8rc2XMSmmsgkquM7Qzix7fRx6GnHLLcezEADgWHg",
  "key25": "2op9fpKe6QsX96cUTteuiLi7cd8hcmp7UNuVH67UgAtG8uxgWszq3pjyWvxy6AGzENwWVkpLmf3idU152RRZWytb",
  "key26": "3wCF9oNWTeCsTx3pDwQX1FbQpyA3EkM8shdCjHh9hcLMQuVZqmqRMvaPNM5eu4j7pGg3aYAMDVZqfoe9tUee2hbr",
  "key27": "42zdt7PL1EKrCqj9rX55GNNQHYvAfsyKwRCcD6C7yBGDu1jFUcBHtQstCLZWdgLcALV2NSFDK18KyzHqNNZ8RECJ",
  "key28": "3Zis26fKyL29x6Bq9qhkfWQzFzqcDNG1TbB6GsrDcTEkFRgciqJon3RMcc82cbjCGNXjYzpRCxEoWNgpGs5zUtSB"
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
