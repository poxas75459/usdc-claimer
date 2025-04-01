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
    "3ittTdAtXZr7kNHPEEMciPMKAgQTJnRJxtYxqSgXFHp7mJ4qBwSnmcZTXP3rvhuVAxBnDzuSQUgGMdvGVM5VkvEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kPonoomgUZMjj84Tvz3GhdcMgCX9U2yvpMahdwZjpntwDkJK378enpzxiN3r6GGFfHx8NLHzQdnJ4g1sS9A8M1o",
  "key1": "z1okdYFAPTM61uGhef3oDyPbvGjWiJVgNSiFC2bxGaBaYdLyn66juFg5Y54UAobv4tQybUGKgySY7bQdWQQoLL1",
  "key2": "56wpVnYpoEfgBhTNknNp493p2R5yPdg9Ui8vY79N5A9AHT8bvVMncxqQBEFsnCWkGrQyeQ4Bg9TJeQ88x25YGHry",
  "key3": "67HdVs849yAAxz42Dfc4vNTWLEAop6KYU25KXoEE2dWmstfP27nbqxLgZoGa8XAxPEfotSZwS8eGaQRsCAcus7b1",
  "key4": "3jZm4zTpXBWNiuXVHSxWe8Ev91JxqnCiVZMGnTdwe5kkwJbnhiwgReKzYhZbSNUizbchLiu8z4kHiszuoS5zqkPA",
  "key5": "3SgHkzfwFVcMEU6fPgwf1xGPL78d7EdUT2X9aLycaq8xcPaiFx18qXdNebCCGJHJm8tAY87Sr7tiAdZ1eCNGsZEZ",
  "key6": "3KdRZy3wBEP2Ftgf1YZTYftnuR9SLeMRzURx4HcyuehfZrjSExkLaByDhPpDxUgS39sMFPEDMhZTRSqg1HZheve8",
  "key7": "3qJG6Xi94gqj3KB5ZJAsoEVGPBHjFNUrvxVd4hXdSpV9DfA2ZtfcJQ8UTMcG9XAAib1Hwk7mH33tahByj5hVJVwo",
  "key8": "3QiWSkAD9kmoBG1yTVAQ2ziDJUzjtEQf21B1eis8bVZyE16bYFLiuucSn64GGHkby5tcQvqPZoUbeHYCHtdTZmsT",
  "key9": "3KQePTBLACPdBTBTwvkUd7KeFAVCbLK1bW9zzycN7HTH144725xLuVESFX45Aw4cYRfS7zN86U6xbKfi5Jvtt4Ns",
  "key10": "54grH5uRdsd5gWXQsWHLm4i9w3NFU2ia16jUGjTai91Gqjg2KMwGdWSErKpG1VDVGig1XssbTXZg3jWeFcTS2ZsU",
  "key11": "4Ri5jSPfB3tMDfe7HiQFFyb3YCRE847x6uftxZAgCf9nF9dX8pX4va2z3qCJpLPotuYCvCPqHUmFjwDNZW6ui8ZP",
  "key12": "3GrbgsN2gRHoZDK34rnfngteLs5567UYBYNDBUv4Y2Tosi2qqUJw2rvtN9gziQQ3q3gLinJ8jDUoh3tg7n9DmitW",
  "key13": "5g7mq4A418fhXh24md5uRPbLj5kfeBErspKM9VH7nLUF1NEbxwNvmC7stpwA4QgGtQSaNmzAh1HPpMEmCckBxu8m",
  "key14": "36N7fntY2W445pDBJsEUQU9h8YDqpGTjAuVaE8QXy2uu7tB2mDFkc9gUHtCB3BXMLaagmLzbHR2yuko9WMkWfpf1",
  "key15": "5B5r1mfDvyZZbMHtz2rMFshKV2jTKRDds1K7TLzEjyoJQNjL3CAGUyfiJrxxxu6NQoWkzfXdsYGgzbUWsbz5DgDm",
  "key16": "4JkV6C7c9i6DPocebSTdbVhWofBTiQ41hA1kjhtaLSoo7yKMjCUEPJeb7fxmX9j5kd3bivoc7GYZ7Z6VJ22cJJBR",
  "key17": "3pqfMupz44peUGaAAfdYkXqY9brgynQtWtiap1K7WCkUASU4G7yWFSLiVXmgjwScV4JE8FTmZDFSRrup5bDeEkN9",
  "key18": "3m8dPEQGL4djvkZZrf6wbTg2g8qjYNAAbPtgUEE2BSTDXereKvzKp35xF3vAP6EFoaLaS7mq6sZgHnbmgCCpDxLC",
  "key19": "3ffnx1w5wntocbpn62XsmtsJ4ZPcY6PDSHDZ74SRRSZh6tjoChH7E1L1VWrw5twXrZfm2SmpAzjCtegtUAuPVWVU",
  "key20": "3sFjwDHebY1bUR4iLv3ViXiY3shXNGDT8Vw6MKB3cUXSV3X46MA6GEfLL569ELbHySEYs4YkVf8U84BUnABBEiXv",
  "key21": "eMwYk7G8xPRve3FpEA5gM46CZaCupGz6WhPtfEYzSzKEPo15YX1tek3wjrpMCGVctuFbdifXAk9f4eMGdXPGKM9",
  "key22": "2Erd6jP9TrqU7ViHuT9xGGoNGd5iXqTPpqjgcnb1foWxcEh3wzQ7XXR9uRdL4RqvcmDqKL8QVmmaB5AdutTkxKsC",
  "key23": "2Kgh8vaXQ87EtPajTPZq9bie2VMga7oSsHdGUhEoQFQjXq8cA8CgNBrKAHeHXQ1z93JKCYuAooEdrz6WwBcCeUz",
  "key24": "2U4bgtqnU2a2PFZjf4RwESWJ89YcHZbvz8bZdZRPJbFy3AoBaWfTZrAtwhsQp5EBzJthVdscxUQ113PcY7UvDS7a",
  "key25": "4wTVki5SJ1G93w9bgyBVeE1PLrYTpdjeKg6y5rDK8YQArEtawqASe5hrNCGYxvxwjbV7d3JW4wBtFsHqGdbY8cKE",
  "key26": "MKe9oGbKxaZECU2AMWGFwXeXpAHW5jyPQWYja3FXNdkdhmbGqojjsCESnSy4AuCuy8xChDdmepS1oh37Cfzbqpc",
  "key27": "2C36vYAMVhhxYTPBkbcVFw89tz4b7gEzMeGUHFLGyb3ce8kgQGX32qZjNGC5GXZrLTWgSXhYLb5BLMoN6J2jGNaL",
  "key28": "31GpCe3K1PCDnfij4Za11MPuXUPnnjGQUKdgztVfgsML2mAioTCvszC7vxpW1uTMYtEuyFHxxojtXHkMBb5qM7ny"
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
