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
    "3xMpeu3xK5KD5ZEfTFNC26n4WktWNsBQf93nTPonBrKgsvEuckKeZeSRT3eCUJMZALpCC8W5MNczHMfgm3TKjUom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wn8VtckC5QDpxcyd9tsP4tFzZajqac4CfWu5wcTNTbSz1pG2DTuVtXKPUJyum7Qo7YUuhv4qyNnaPgtC48CL5Pu",
  "key1": "31giRn7XykDes1dE3on1s2L8w26S73NJfGz3L13MJfmdxSU6aimD9GkkSPGJoaKvFTbjDQMxfeEUaUU5sTZbVzSe",
  "key2": "4Zo6L1PUmvgc4jWosSFThphm4yhSaBjv4cAyTTX5g8xUALfitErhETfxffFTb2t7KhHn7mhizWada1VvApARDvH9",
  "key3": "3mzk8tRpp3jbtK9ix7UwsjfDhUESQpPbU1E21ChEZ78qr6HCx6b4hCPFrNzbuTzmMq1hF2w4sotX6RXeUN4Vgsjv",
  "key4": "42AnmTNtaFiWK1CzfJeLxkM2BEckh2F3zLMdNfz3MV4deFdGW9MfBC2CdAXxSN3SmVXWZh8rR6WUKgJoMH2CwJmg",
  "key5": "2wSFzwwM3bCwUyxYH4Dz5Wdk5NmVSAgeKm6VCLMtz6qpM286BCod92Dx9FEsYMcXfaZjuaPggBpivDDdkfow2n1W",
  "key6": "5PTrQy2yVR5xe4ZkRd8fPV87RuG1ui45c8426fm5bbiDs1pVx9Pon9hdcbvWQeU7X8sk8w2cUpnPLBWmgFkFXpUn",
  "key7": "4dhgdR2hncnF9599d3ECp9fRXGDQWFmjSo3a1VK2HYbC9VtdnmPPVX9LFFew1zv7gQnKibgGv3bcW3GrzZLJPhxw",
  "key8": "4dhV7mX1smUZD248kbGyf8UiUsCvTDcKWxymibKxALEpx8jW5e9M66hN9UdeNXD67WJTBLHcVerF2C1RdLqNHwcc",
  "key9": "6zQe5WrVrgj81h1e8T3U7cWjW92ysnSN2Lp6z1vuPvtYZwhptRJ6eqVCs22mYN4zso7mex1t91z3JWLgCwbPghL",
  "key10": "2SCncGjVV4dJSvVFKVJUWYb1XY4enNZa3csiDQe88VLTJUgj2ftXcdTecBz2qNc9waLXpHpNrQ7sXEf5PvUFdsxn",
  "key11": "2zhJwoJcVSfv28Qi6LkfF6N4uwN2pR3rrUHQNGCUu938YspTEmJenCC5w4wUSG55c8KdaeqyffYbCHT8faruVCLz",
  "key12": "4d7zjsXBijnEDXx79QYaAH3KNgMsCvooFFMEWoyfwFr3nA7q3hm8aECYCg8HPKKh9TC6CrmsYLTsgvSuARs1z9t8",
  "key13": "5JtfFcpsNF8uXGBY67Bcwb8Wf4Qd1ZXLi5EXnx7bcMZzhjekjXgtHRBhCRpXCWpMbnV1PkK9v1evhRTDFMEYjLeX",
  "key14": "4ujqHFHibKfCiuT3S3hSudUH81VwaLPeC3R3r4SkdgUQjwx3rsWD9n9cNPTpANbSDBcjLFTFsTp4JzK8ErTb8Xd4",
  "key15": "5QPXtduWu9Qa3QRTRP6UaXaCCeY1ZpD724AwgZnp1qcEFzZuWX75ZMin6SiWMBDspEXFDVAAFfPhCyCpBrczoJVL",
  "key16": "61PZZt9YJ31Ejqsd5v9NwEHCZ96zFpdsoWhF7tNXsxRGmnhEwzHwQRrSWanf5XqhRdJrQptmvkNbT18dzbvQQuHQ",
  "key17": "5qGgZsC2UxMJihqeNyGbsiqooaoZCA6MsMn96CuXWY8pH8TTBRdWHDzLn3GicWMFbdNecoagoUtJikPzJPQZvAyt",
  "key18": "4mih3qHZPWCnvNzDZoPDwv4iM2PEyj5wwcwuBGngnDtN5jPdVLKq8ZisJUiL4wg78J7EkuDFGeQxfoVdmUp25NHj",
  "key19": "3R6C18f5knYE12uCvRS61UPB7tvQ5SHe9hAcJs4RvVncQaci54VHuTmZcGktwD9zADA25yqwdo7qrkViJ6d9uMN9",
  "key20": "3LnE7KjcxzKmv7Vh6b2Rsq61SJq1ugqYe84vW8FFZRUpLbCxj3U78KcuhPGcd6thLEtNyPHs2wmS4zthDApfmjvA",
  "key21": "7tyEw9JAHNVdugNHjivEZG37S1WvrthQERhfSCW857K5ptgD9jraYrgNPXaLcGpqN1yiXnpqpUgUr8MtiYLLe4r",
  "key22": "3um2SyuixpwVbAb88Vpk53F7HgNraZQ4Xir16W7f9jPLjcdXgowqR9rxmAVC5WVo3ANYvUNU6eXr3H6soJDVUBQh",
  "key23": "2UUkgVkMTaUdM1QxCLcMvEXQWyPM1RhgqBpzheW98iUsURnnUczXGUweKJCw6BRqLN1vPM2cJSynABgyzid57yzR",
  "key24": "5WfQSBoZobp3j6nq81qHTGtwho1PW1jNxpSgwW9XMo1U7j7WiiPp6LPycbE9mPA8AxUYjwR6kQN3iYo3ZCFSRTC1",
  "key25": "1wdk4hhWLdSN1drrB5B2mtJcxHJZzWZ9Udqg2Wm97cU89R1iqJ4JfrXaPgQusLd41tuhgedk6RN6YJGMZYcbdrE",
  "key26": "3Qf5oAJsnQz7eeFbDHqdK8vjF8RXUFYop7AmNW5UpgmGY9LB4WyUgx4GYzqNesShzpBeoNDqMJkKgWJ7fhzmYGLZ",
  "key27": "ToKcz5et7N7cBxjMFXmpe6qEChvxLfKzhz7XhFLAt18wvg1bEULywWVPffN9UboVbZVNpaLVihLbuiDh8q3ZGSq",
  "key28": "2K68ZYvnn2NjivQ21c5RbyUXLZMF6r8twsSsGByAkzuh2ccYEXxAtavWiqmyYzGKSmGctCWwS3UDzmuxVh2dREgR",
  "key29": "47SCAVELD7NLJ5QYFwXUAfiJL4BFkBV5dmRvqJGYcJCtuyDaJhqhGtBjskxe7t26jFG9Npki78ZcyG7MoH29eccj",
  "key30": "2i3jyaYNvkkY6UymJTrP1xXf8MeAQtzJAo7ZPmBo5ksjGNDFVfi42wBrU3u1JRaMmAvPn4j6VrdGavCgDNECfezF",
  "key31": "5RNYn9sjfbTc9v4UDFkDzLTkMGQMVh7RuL9TFKGuDjpmabG1aPUR9w8a7DDqjo9iuy4gYGQk5qNxCg5SpozVdvPD",
  "key32": "4NLcBc2iPPZnbPznvisJx9AXvLx9TKPQWootKKqkkAvgdXBqxzbdsoZrLosZwKxFZV3gct3gpqVscVm66ZmXmM4m"
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
