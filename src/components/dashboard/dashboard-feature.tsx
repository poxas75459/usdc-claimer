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
    "2ppyKbUgQnnvW8GcrRfs7jukFExWJkSAxa56gKashNCeG6Z546Eibzrj7BEaEBAybvRyqW5H4vzM8ABGsntr3Gtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ffg8KrYqkGaoVsVhWaGehQmom8JvsBSuQB4JPe7f2oENop2diR39hUbCjJ29MUxzhVkSPGGVt6g3GbrVm31cqv",
  "key1": "28pGLMd7YhXarTAVSHxVgyT5HLqG8Ha6smBQ2QeTGTbo6ndALiB1fkBVfWfkGbJzTyB6AwwvtGW34ahkpCvgrrby",
  "key2": "3CcNJYaVj7bhDmUmrzEuCN6s7u8vgELhhyhVzPyBmanbhEUEYnNUXbYF6kUFk9Fk8T7DmP6x8eqAz5gy7XRnFDZL",
  "key3": "61uZV8EnQfA3db9G8QNWbjcY66Tu2P6zJqMTdMTPLAqb25947EqqfbmWqyNDYHxKXwACP8HAdDTyfXW5nD82by3A",
  "key4": "551eW4wpUicQP6H7U3dTJ97NHMQBSfq3s6g7WU9s43hAHutuLcVjNQHfBhLGsn1EmvzsiYBnXAV6xuTDwqZULMKJ",
  "key5": "3uS18CxvHKMHUa3KCkEwPX8RQ9gjGGxHmddKqhrwjUkv95FgC6GznocL8n5ZtHDNdihbshc7HRLKiPjd8MNfZbk3",
  "key6": "4fbRazKEtW4qe4jWkhDgkWCe3ZwrFfdzgRj3ik3dWXPj1SWMgPiBeBsFW12oNjCsVhybgsGwEGzoVr4fAjRAbvFS",
  "key7": "2tqk3xZvHHCEvXbpgxtg4j9GWWv76Kjmq19qHJbieQ1urKvu6R6YCcXdz4yPiZV24o9BarfKSHcU5yaZ5TasbQUL",
  "key8": "2FTMn1d9WrFwrh5MPrTpyxHsefnMaFjNGpXx1m6RSQtttZmbLj4fZtGhym38vir6ytqPSB3yESxnq8qdNFgPeWmh",
  "key9": "42kYdiCxt1ueDNrRKTSzHFuy3PbL54hz9tVnWYy57zYHcHwFiN84D9H1vR3TWuFkk96MYP5cvQqJ5iFYvLp9Wu9a",
  "key10": "twmP4VhjyEkeiPefrsmVrJpG25CEpduSDzQ94MfEVvpBdpPT6RRmFew8CTSdSBWXETcB4wqbAsJPywvkfXg9g4n",
  "key11": "5JX1RugsWe7AziuY4t2h6QoMwp8Z2eRyuCw3wTwRUwjJD987ru7puRRabfKVDSofDsbSdu8cnBxU6Jz7MUbjwZD7",
  "key12": "8C154vkYFEwMkntzUVeLpsK5XamU8FoN1VkekCBQXEBt16u2DsS3BMESJfxswj1Tgf4u9wLDwisQ8Kcd7ZUqXz7",
  "key13": "3uQeLYsauf3L3gS7p9SyNcZH2aaP6JyDJGFCk1yNs2Xu4hBXxgLNtFs78tV7UqHJELv3BhGp6FFvDKo8vGic5ko3",
  "key14": "21n8prDiwoG8DM94swfcb71c4pbAYX9cUgpjpmrSLzTpM95LqpnXSBT6Gsdeo8ZrLeuVGyZKUKeoihpDQDUAy848",
  "key15": "5SpMtepiAZA4qh9uJaMk9KFMZzaF2YcnNh9mnezbutwLmty4WrSkEiUpTcrJhT6UcrSkteQPWtYkJj5cwh6jKEMd",
  "key16": "5TAhgD3hNhjBko8nN8ZMVKXHPBNMWfYf2xKkHJEoHPHsc994xwBqVQho4oVTqKA4vQhMh2mSoXUWuDRn5SFC4YQP",
  "key17": "5r1KiX4qtpdnZ2co7wGZfMEZZekSzzfLPJhHEY5cHjBdNFKZzoTcmycKA5BcPFnvCqVSrp4vKNkgWEui9d5gVk1f",
  "key18": "32uhC31xkQjFe6e67yj4eQhH1ZWpGyQsHtpn1iPUgGbbP6RE8NHDBWkiRFNJRB8eU2T7gcTNqJdHSqprBDMEdsCK",
  "key19": "4MMyPYiy8qpxirWUEZy4it4nJjJM6dfVbFKYoqFtmLii5v2BDPjNHBJgsC3y3RAcacJmhsEFMrf4yP1rxmVg2Qcn",
  "key20": "4FLNNUKnwJmxDBmXVdbYLsHSwvMr47AUVvXKXnrWxo1fuoLFEm2cuVoY56iQHydLmWFXvFcTeVPFfNZFfjWkJyxL",
  "key21": "3n15HG272wxFaYKHY5nEUheH6QZkNwtP8VPcJMXWjuLjna57uhjcNGgbmuXvaLxMWz1prvkEToc438qQkfnKadYj",
  "key22": "2E6FAkEdwA1XBLGTD4FDHzJb1Vyv27iRkPU5nvAQ5Wpw8C4ftCDiUAQAMeeay71CvHLMMKjbxbipzN9bFK2yVuoj",
  "key23": "66jjBd2aoBQrUNFicHdJkC65FxnsHv2EuMQ7My4USAre7wpZt7djDCpWWREAH1UkUxnWJ1UK6gCig5G112ryc4ns",
  "key24": "P4nEdbbkLc9HQ9HGxAZyRTdccMuzRBsWCf43fHv6sfMWfqkhKxWsf4WdWrvyM8SSDE6v4m7tyZ7Gh3jurHRwcHX",
  "key25": "McUxwmasexVvcUuKeQf7j94g4xJAh3nGZgNu4j67T1NUR5iiRBtXPwNzrRPC4Ln2q4MFGTpQzET848usikFsw2P",
  "key26": "3Twnd2ToZzfqoj5dH8XiUnQVzmiBi2nTm7Sjxq1GARb2xDcbeap4mGUTfZD75XVrmKeeKuhx8jTwGmN28QCH2pCD",
  "key27": "2sSdfdAqfWJiapU36cSRLbUShffawUAZCsGNF9PA67EZc1Wcn5F9CJJtQHxCVjRv7VzKx7teRnczn7SNPXKAhRJz",
  "key28": "QGncSFcLDHY5ReoNhJ9A6pftXxA2q86xC46dfYM1FzkFjMteYtELczeetSP4UpewAXpgRo3BFgBYiFNTJaRhJUJ",
  "key29": "4nxaHzGmjQWrg7e5eX9YsrskHtz74Z2W65RdrqZKE7YLSbQHDXAkMA7zuvPxgEnFTgpNgQ9TAcktUanaUHEbzp7L",
  "key30": "2RWXe8nMcS2pajqzs9TS23mTB528dg22E2cNgbMiorK5js7rLNq6gzcveM4npyJqG5Pe9Gdb6bSEsASAJUcjxgxY",
  "key31": "3tFarggvfzSUNCdNihXSF5HwrBof82R37rVmi3ZxdauaC31rWRYZGvEqJoNE4didMKbvhYWa9q6zHxwEtA7yyX4i",
  "key32": "4UbfBGCSnV6r6fPE2JVseiziew4cqqw5XaxhVN5go6jWh1VF16ZkUr19M5UfDTBgkcjZZZM7RX3kBejgiJLxag6v",
  "key33": "5MrhZYut4o9qisWzJ3LT29m5omxtBpN8zVrgW8aGvQJ1cAVPh4fWWvfU7on7mw3AS3byoFKwvtUawESgiPGTCEmF",
  "key34": "4RwH7nyieQoNLBZJj5wziaPYtLdPFBsQwp421ULuaV58coKcYCxiiZsrwQuxQ8qHWw6boitDT2hXjcmTT5abAJGW",
  "key35": "2UjhzQwkq4621jbXUvHNZb7eAMz776UhpchK6Bj5BEiTyFnto5fomLNnEVCAG39rMKHBXX8wgftmvCpWd2oLmbip",
  "key36": "NBGJxnxS4TfuDNEaVdprf9j6mZEN2RKo2k4ctMc5Ubri6HCgmfKvnMrRvqGWRK7D6UVhbK5rmvFGxxnvfe8BWDX",
  "key37": "bRihMeKHLVWXwrn8m9wvgajcNhhbiCePWrc5UzTK1eBi8ak6EqpeUXUL8EQU43VZFyPGjpmeYAsjPyoUmW9pwye",
  "key38": "32EEacLLb6uP2S6X6AfFpB8YnD52qPqVV7pYhxDDxyiNeHpW2pgqer7vxbkjpUircPs871tHkL526BFKnc1TEACb",
  "key39": "4S3FQ3G16uhb6SasEpAxsJNSfuhE7BJ3Si7s4c8JhiJQBeBuTfz4N7eG8eMpgj8C2PdasYrmdNWEAkcWi9Hzdvw4"
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
