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
    "4kpHzaLfwJ7HnkWZFYZuiDSCjnAKDDKNEAxrJdo8jg4EuUPjMvmyyZzkxvJV9pDX1LUvjNe9Dg7hJYYtzpCUGUTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wrJB7V5E4PdufUySex9yrnpAPj178dqGaWGtSgr3SBM7jeXQehzLB2Bm4iBJy44T7SHpQBXNimjL2fqGTHacjNd",
  "key1": "4ed2tLg9YjNx2wyqD6TBPdwhnUSTF8PuLVgeDPNYA2rdUrgf4JnFHep53zCgLcbZbyyEWvN1bXFC5GLK7WZm43Px",
  "key2": "LiFEbmLnfTtbJAiEDQ5fWCPoqhQDeJm6yUq6MBm2irqxVCCYrqZNyo8nsN9vFhwGUDvwukWK6sVx6GmJt6x2H1R",
  "key3": "5XVCCMTGaLnCH5M7JTfsgV4hd3PuUNFy67F7oweqL3TZ9Ds7ASCCZ2BMbWzXSrZvnua9nY1Q43zQzunNb9wEpfof",
  "key4": "5ny43KeVYWFmsHWSUendFgK1JwsZXgWaZjnLudFfFmRx3hVWAw6kreHpumPwujNnc5TLaWDTv6zYkfXxpEdwMWrL",
  "key5": "3Qy9QMyVXAmN7wLe7KaVsNq73AxDDE9mLgp4CimisD6xPQU1j7CHjaevZpRphVjRskYkGmnuu2vfTs61AsAES9em",
  "key6": "4nvLp6QoJuRVbxUAezzXgrRqJDH2QC9fmKpewJwuN1PcQPBFAmCizfG4d1MX32FM5mbx76LDpx27wFVAsqL9kZ1w",
  "key7": "3GivEq7iFsjkj33Fw17Z2GqXuL6AvYj3xY4rVghjdYKRy17hUQnoGJBGqnHnXwJ4SC1vweF49PHn6sYtokPxyVXh",
  "key8": "49vgVnAVU6tBg1KNNHnDDcuA1njMdKSg16NWZNzpU7CKkNnYNhfCGJwMN8GKVZvNiEkyKGBy6Wdj5TEA2ocQUDjg",
  "key9": "4PFkzyd1u1jDZHpx3wqBwtZqX54SEsQ8jhF5y97P2jjyzimeiF82DuHZ6TALo1ezTxakmjrBKUXJm8k6MASb183d",
  "key10": "3cvqAmJjfzJf4EPuxRdtXBQbCCdL9cSaEuSAx3nSgYErEY2aJUtPYBeMCfUf5uSFfEUDDwssffrPmVtWrZEPqgPv",
  "key11": "5tmFJEuhm2Gi8ZWopFzekEhfxJGHN7ye9n7w7D5QRqTpchjQanZus14FSziQ5bCxeBjHboJWgBDmEtLL4vXg2pcS",
  "key12": "3CotHqv7ApzDG2WtW88LJdv3MWHYuTWGnZ5AGFfYWSj7AP1Eo4MNxUy6rgwFSwQpLb9o2SPKz4C4EhY3DoeoxhW6",
  "key13": "4AjCopGCju9dvd4wUBoHYFS6vWx7MNCgLNKzWEJ8MceFJY2BQSbGW5kb4NPBgf35remKgxZa6osE7dA9tCwwacBY",
  "key14": "2FwKKNi6MGo8fqGStWAGfTpGCxfoC2caHYF7n1rbSWWnYpaUfYBuHochveSQci3ba3o6wQnHN4AbSiKyz5T32xg",
  "key15": "2LiQjVqKqgbDBXWiRqP2qC5m5NXNUfr811ewsS7BFEmX8YqKCRArKXPgbw9eeervdQ4AHePxVTLSG1BGDe5AWBDy",
  "key16": "3eLcC1b9rVaDH2nYD1foskB2a7e9LXuB27UMHzPQSTUMu1aSL7FbEYxbDfMpZMtsgG82zgBhaNhpFTKdJ7v1aHf4",
  "key17": "3GTQVTGWepUF35Y5ELh3cVuwRAnE6YwraoAyLApDja4FCJFTMHdG8yCpDmM8NE8orJ46B1CoP31ozimY4iRqic3u",
  "key18": "4bLRYMnCeRC4U7JsZjK2veLpykpQ6B6txcoA5HnuTNV2eEG9dJNKW74M4CfdzQJhzwkUCQy7QUJiJsjpiJA2v8YK",
  "key19": "22JbjaQCMAcNumtsAaU6zxob1KmU32dgLWAW5k1dgvy2B4WMN6YC2ATDVse8U85tEtEqb3kpuPvo9J1Y9XVxGCAs",
  "key20": "26Es2yUrnK6tVZ8WpZ6Bk2pFdHfNpYWnjLLuRKkwz3inzQPnnwqyNjtxiFeJmPq6HSw2YRgSGRzzyjrZ5LGLdLfD",
  "key21": "MGChysrDUdw11Zt9k9HC8XRrT7H3z4PxkmuhXWLRegkkaCo4MJBfiwZYaXcfTu1EqH11WLNwurovhCuWcCZ5jV4",
  "key22": "2e5MJbBtm1PeqcEnNhJGg84DX3UXkmAoZhmJeAJdVmjkoHnoNRERi2G3pYaSuSWUh3cpkvYFGAHXTZQEY7yowzDL",
  "key23": "2aBasBczgwD1K7t5DS8xXs48v7XtfFsV5AXeRvHvkMP4a56VmvtLheWm124jX7yyfmURcFoXw62t1DhEfMseQrLT",
  "key24": "5paWTPPX2bLq59rpjqD77RvZaHPapxe8gHzJh1EJm7DMHK6CeBgA8zBekz66Fjw1TKS6WTqHVnAvcxYXFEhYvh27",
  "key25": "8Dw5bm65rGET2Hef9NxiauZysnPcf9EAMsaJwnFcpHbByBPxbYh2jRqkPSAF55MVa3a3XCp5EiWJE5iPrJB55XB",
  "key26": "543sE6Dx9vXnc8ehfgNK1qDrTJFaMW6iRgu7zksp3NQMeQg53ik7Rd1LUkFTP6nmAd5BtDjEsLXAYJcnuNutTe25",
  "key27": "5qjnzDcrcU2zBskpFFGSkQPWV9jiGD5zZDwzs1J7AwZQPZkZHS3JwCuLgjbCPZKpgHdCebAxRzE7b9xcbvW4VTY1",
  "key28": "3HXEJ8mjVyHNffNKCfJuhrpkFEtUZwtB76fSw6oezQ2eFdFgUWL9iKFUfetzGbiF1hXRCfpSYfTXg8GBHDhduxoV",
  "key29": "W8M6tptd5BWJm7njtNtxYz9yyMVd3L8TpwwAGAH55anxLh6W8bNMzXEamr6kGHFC1Hp2uvpHM8KXUXtDx3Nye8x",
  "key30": "4nSHtbPCxFgFhJFTTY7FY9tF1CPRZfeBNZuTNZ4kysXNVEZRrFm3gvuptEKrgsC8scxcUV68sGNWnhLsXBAmrv5c"
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
