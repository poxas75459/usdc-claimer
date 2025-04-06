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
    "4WwBZ8PUv4WBYW7HswykKfbysEV8DxKC2dnkixBWis14v7fXPjvZPvA1BEnsCysUcchSbdy6tuER56gv3gjSTbMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QnQUyUxch4HL4aX6GDBeVyR8wCpG6rLoKxU29BRd17oBz65LRryErMv7xuL4RVSiB9Givt9ZQpXgHsgMnZ9KPE3",
  "key1": "5tms3HWPkvhVNvbnmwYaiF44f4SifvoqQXfYq7VD5k6W3Hk8Rh9YY7niqRiSSsA8KjmeAyJscVhLmtfmhwEWumkK",
  "key2": "2HGCAXR6BMNwaEmKc56xu2T9aVVb9VeHUS4TLSQJdYESatbN8D7MvUKsXLF94usbGeRBPoxh9q1fXnhnYxetXCUJ",
  "key3": "2saA9DKfTVrbQr8dUVdMb8jARkGLn4eFmXvDRwr2VK6E68HmDn6mxu8tJvrUVTYCtuaBVAjZKLc5AsJUEG3mAZFY",
  "key4": "5JQ67AFrK8quK6AStP7BkXrxBntkLw5vb1SA3aFvJ7wXLHPcbG2qgxiMTyFbjhzfAaCPDE1cr8itWTa26pJGRS8n",
  "key5": "55rRcb49nuy9TDsc3G4fVpRKkcb6XFb5HkZ7YHhhfeVRQVZMEFeMSc9H5xhmJSqF2f8kdCPWC6kxR3u5dxiX8kV8",
  "key6": "3D4Fk9C6RS4hhxtXc2NXXGrWd4XYdghyio7DiHj9T1p3C52jZDqp9whRQkrvyevFXYKjzekBGHGCAtLwJeGzNAcA",
  "key7": "25zGZuDy9vZC3tXZQZwtvbg3NNsQynRe7XRQ5bzwcmLBG38ubTRUjbhq98ihdvNibc4NS3PMyix3xLdrgiHp12un",
  "key8": "F9MjVTo75rCVuxYaxGYuH4Q8ddq4JwX7XmFHkaK1z7n98X6d4EQJ8NL12vSndnabL4TdAPLHs3dkQVnNRMe2EN3",
  "key9": "41Wkp9fTWnfskky3RrEwcaFEFx8n8L9RzHKfRbwbrNjC9f9Zixqp7PA5hKcuw2CZ85N9eLv46zo2hErkZBSF5ggw",
  "key10": "3BtVDEzoc2YQVknL1veXWPe2E9oAnUBZq15yYkSPb9hTrhaYp62L15LHY7nx3UbWE4g1K8yq7PyKjbEwL4sAMGWH",
  "key11": "3h8cx7GxtFdsDfnLjSxt748mVoiKSmrLNZvq2CcU929HBXSczH65C7BovhhHhMZCS1tQKS9bhyVMEJQ4Dyzy3iUw",
  "key12": "5DgnWd3xfAxWtiDrN4wxG3DhbYGiBrfwnvTqAq2vZFwBdoKPAEQUvqLoRi64MxNKmK1FE3tC3nKNzdkFX1Q9xrbs",
  "key13": "2iyfNrY9Em4wuNUXDPihwSKXpbU2Q3J45eH7tNP43TDmaqG3KVpkswxwvGaWCXQh1kAi2WzLtmyyh66UmAZ2USTi",
  "key14": "4tgtvV6hzcxvZkFT3B6asVmWgT9z78grmeYEXrUrqgMqU9MRCe8vHF3dN93iVmCRmtEfVJsCGK9grPx6TvxL2Whg",
  "key15": "4j6RQhZjMngdrV6zeoC9qY92gzfct71Rq75HA5CLWBBRHsSxLm3nnxcdfu5XkKanV9JBYjKHPAkDJh6Qrwt7QzXd",
  "key16": "emkuu9xE1XEv2xV7GyLoghNB1A2n1RMzatuKpReFthBiNeTDa7zqKrrVUdWkSCE38UPszg2DZ3DMVGq9K4ZzhLY",
  "key17": "4hrXZoLon3NW5XCr14yYS1fLgjFvfMmcC2RPvQy1xbZKKXrMAgZLxxoDXExDAyuwVXRnMLcjZc19aEt8AiinaioM",
  "key18": "4ddrFwaAq4kd8suAc4oQatFswKJjTCqEafwaRNyzypvvySLhrnZ6sAFVHJABPquZo4ymWoroUug9SW7MoetpKuhA",
  "key19": "66LqgmZ2cBrM4TpD2e4s5uhMF2CynXGaEoZDKgs9N4qJ8AC8TasbUrU1W2kGQGeBuGKufgnsTx9eDQ2TD7FzEraC",
  "key20": "2nRnBKNqwfed9Wi8Yz1Ti3LmLGUGomvwmcPX1tWzeLduWsyM3fvDRmrhLEaDVewmXyfojCAE1RfAMUcrvPoxtgL3",
  "key21": "3gXNYCXqrHH7jQK5JMt71NuEPJk9ZuarkZ3XneFFuo6ti1MJewauyuTBSmv7xDGWkhFkcj9Vz3CE9xmXB2QFQwyK",
  "key22": "3DxfqKHQ45K7mNM1EzvmhC4w2LhWhmbiFN4BcssSqB8NDDJg3innbWGDF5bsQAChKG5ufC6Eh6QTKMT7EteMb56t",
  "key23": "4Tke6eyRy2dHcTAUyr14WtERWu2rp1Zm2dNTcJB3CA11oiguXX4vswtc5zwrQubZMnGVRSfgr4q6t78cU3jqBbu3",
  "key24": "4Cc3UdPKhREvma2mWqxU8UkcPQYGnm5DT3jJ5vfQd3PZdiheCdBFe3Q1sjFPDsp67SxWQXTeDpnLYRYGkNLyG7hE",
  "key25": "36wGP34kCY8MogfDn4Z9j4moT7ep3eoGyKAzz7a7mvFRZB4ini49LkXY6oGGJ3UDbeFq2vQXaUsDt22qypWyi7Ac",
  "key26": "2qSZPameoa71u5chZUN68xMz2w2zdFkwtQppsjjCmcwxJ6UfXoL53Y3GZiPPmULt6m271sefPJK8y4KgUFXsdeL2",
  "key27": "3GACRGPFF1DK5cd86wHz5f7ahMm8Hy4ow2gdvmMqjmd7unAD3HibkV396iD47fRy5JW6HqPXMFRsbstmm6hdRgaB"
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
