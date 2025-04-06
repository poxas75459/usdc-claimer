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
    "3vmBa2ZuUTMtRppNraTnRTBdp1WoxN84N6cHhZoCMjKe6FkoTp6mdioVnvtiXY8KpcBFs7hKF27Pq6C4gRqxiWN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D6XsekTzD4tfWtVmCRZpWRiBaCb4T9qCcXowLFTZqhozyzjm3NRT5BamBqYGpRfqzo4WjMbZfsEuRYXoetqzvXk",
  "key1": "4LNSSjcrYJCcSM4PkRmZ45apiBbDBD7pU8x8YepykG5Nr4nDWttZE4Cm8BmhjGqLwmZ671vruFjTJAAG2oo13FA",
  "key2": "2HM219c7DEmNq1hT9anVLkGYMMZNym4yvyVT8UDdLAJTsac9HyFhUaT5hF5s2iHLoqp4Vh9cnMjTwhyNHQfPusdp",
  "key3": "5VbhoCMhgCzrhz76UA4beVgkEVDk4UqYyRQoRFWsAadk7Afhu1wvkN1tVhfKDxw3RDdNfzenEivoFHwiT1Wgqei2",
  "key4": "5ow6GrRfSAsHHu9MUjwVkkCPSfyurbdCiubJvB7ussakbqF2UVZKDd5XnCWqe5yKvcU3y2hfXu6ipVazMrksf9j1",
  "key5": "2ypptKHnvnfsp2Dn5hoyTJNBowX51BHB2gHaRGADm7tdcUbzjuFtWnfXd3pdu546w5cEg4kXbcHenwx2xjDUhD8S",
  "key6": "TpCGHqR7Tc8wZCb8qhayzYozFwYCQjhXCuCReXXfEsF59vVmEW2aRKxb9twzfo2rv3sAUtD9driLRnZc7PiEJZ9",
  "key7": "3LPAab86Ek4tKjGCfU9TH7MKBC4MaWwQcsK6HvhZn6k9sgjoxhVrxQSGKZDhCBAwXiPaxhM9pDgmqUzdFAtWR58s",
  "key8": "2n38JUwP9avYXHxUwQ15NMpv9WFZNFHx41UUYWyW3rG2Xii82ssg8Csi2rwdPooheXeQhAVupMKeoQLH5JDdc683",
  "key9": "fcs9o6aUFqQBqZHpn6xbVCMcw862an88oHyHJDfn14co8EwX5yq3UW1DXrGmVyKgnrncFd1FLzdyN2V3JPso1XT",
  "key10": "5wegZ6cWeoJmk9qACe1EhuhzeXBZQWPke927WPfxYM1NcWtqJz2Vt9ViMKAneyYBkuEZCWRJgeGDbB1ztkz2zZqS",
  "key11": "2esK3p1xEaqdEokiuhwJyxYhYXjq89WmWcRT6vy2c24iTmXhRw4ZgandikQTJNTtVBkiBhnE4N3Uu1bZTEnEXAU7",
  "key12": "61oZPLURtDkGmsDMAJgqUBWjzeMCZW2wnradjSzyuaQTMkyFbeiZkGc5sLpJWNguZaUYTfExjJtcrETMAbJTZEBi",
  "key13": "4JtCG1UwonvoMkmB4kudyAJm3xUiFsz8jgaPf2rL6nUcFGppeVJApRUGxaBSYxwwRtZvCoxR7NgLJWAqPHKuhQ2A",
  "key14": "3ejmZmuz9NFp9rF1qeQkSeBe4LbB2Km1SwgJ5mbJoi3Dyb53MCSZ4PWLc2Lo16Nmwu84zEY9nWmQprBZL5DQS4cy",
  "key15": "43urqS9LnLhnR11xiteQkz5VMjD1KBL58BxKqKxZDNth1Bzvry9y85JiA6BmReNGiq19SRTo1Xj1WVorDUghYPSW",
  "key16": "3DEh7szweZrrEm5YAMog9h4TocFxv6VW5jvtpoPGsLk16V32F5ENgaUiczzug9QskNvBo9tD8G9N9xKjuUnugtxp",
  "key17": "4hvfCLeLrywSjJ5DBmndrKw9ptL3N2gWoJ7fv1afXJXHV6Bd9pQVZKKtGe5GzBcotKLtxhnKcKnubqFQPSGYrHH7",
  "key18": "3rJ9DwZ1fkaKuHvNMeyXp9XXZUQXku9SFtvxvxH3nmBSb6hVVLeHwcA9rfum3jfaPobWW1j5YHFCS2YvzxqgaaHH",
  "key19": "YbarEwbB69gBBM5wUzW4wpTtGeEyaVWKTetrDEGcGNeDRveKgJPTKSBnYmkBXfsWrY5YhPp6yLjsH2jYyjEbvnV",
  "key20": "24UnGYsRUXP2CfpE1RMnqpDSKzP5p4s1FBXhaxYppUynL3F88N84ytdCethu1RDJAqamsR1FVEAuyirHYBpJPCov",
  "key21": "24CXgzSdQhnpaJ5hfhGGM3ru2wYSx4dqXXrwyLzML86NrmHwJEHLgi3D5imQdbNV2Yknr8nDye9JjKYjnY4oKvGH",
  "key22": "4d2pbjuAo6GYQnzd4aNouz9yjQTKrXVJaSMxvZUjQhPXP5fcRoAuSEH28KCbsEQp6H2BZkvT9aizVSa137Q2ephQ",
  "key23": "56ooismQ7eirTcaGqjwDx8oqb2C93P5Dm3NTvXVofSxAeTUQBEKFG2tQjPHpGzMuL4bJj2d6drbLkwwTfM3YkimF",
  "key24": "3ZNVadwQy8Fx5ZVDTL8MJr7to2fZrJuAbAqBPya8HmmjehYZc6J4AKcahwB76XvPU7yqAYcgE3tWr8qEQGGxnjHV",
  "key25": "2FaxLDaf7GZHf6YXpTmKfikyHsfjN41R5TjBuLUo5qsX2jPccGHoQ2L8AevD73KnG1u5pYq2kgZHJfBoLXb9zDKA",
  "key26": "5bj5xRdEvyt2HiytX3pZgYDvTVLcBoD53AvsnagDKUEQ9cZUtcYSs5tGJD81LCEF6zKfML4wNFT3joqguMtSbUBV",
  "key27": "2fGs9WTuAf2vHyD5xSKTc43mUsawVBnooJhhyEyJpTNVyB6Yc1iwABnKLKFpE1VQLFvjAQ86N7v84gcDMtJUWNJp",
  "key28": "2bqF5jcMnRYWiUeVY4ShTyZ6u1mk76vCQZaSnQ94T8Br8L2EeVAWpx3WLWXDjFL2scFLXvAueys9Y9B4RLoAks1L",
  "key29": "2MQkQUbu5JTCqXPRapWMSvtDfGAN8pQD4ZrmVArPiDmpRo8mqGVxSowexWw4zagY7nes8CtbYdPz8gH8MBF54xSN",
  "key30": "9xEiaqpJEyqG7GayZn2MszshhFKMHDxAoVE2VP45LzK3mc6ona5wSrGuPv8CorRT89eSJ27bZie4VVBrygtZPkZ"
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
