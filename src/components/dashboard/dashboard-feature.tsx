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
    "5GeDJH8jdwK4CJYr5VQ7XUH7m9Zp1yVxH6x5S6gfQ7s9rGCPRrGe3iDtwydfsf4SKXMeYktbZ1BA6iDmvn9PQVNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MqgQaM5gaEMM4a1YcU5Ca3c42VYpjK43KAqrTgqiRDG3F1cncXHFGWvoVg2f1xNuJNAHdWbP8LhruT8NedpSAYn",
  "key1": "4BM6s5pfpt5gj8n3XXWpJhs3U5DE4YiaL5USGCpDiUxkKSaff51G5bq9cZM3gK4gmyZ89oHXHA1RrXN9zCirT3US",
  "key2": "4XaUpJChwAz3SNxMoiuhBfNy9aQcxZQRgFrPUVazY8H8TAHbtyDtgRKpNHdBiDQ7PT2a4gyzY66mbWZcYp1jNLqL",
  "key3": "wxWYWUiqcq2uCbaQaHvsHJXpXrXZvok5fLbxG85VJPqGvkT9PxyX6djzDyuZh93vb8CMBYUg59thX4quh3xYvpP",
  "key4": "43pbLK3jeCq8v8EhT5xuCCd5crmZWjdL8AMr4cJCD9jx5pCUYVoQPXxfWht6pWxbjbaFbSFdavyBYNsZuwbrAXDj",
  "key5": "snrFTxALxoEz1u338z9c5b9si4dZVeq6dAdN1qFryWDxVJi78uRfaPjzrozCUhnAULfU7GbVTJ42Uc59CfeFJEf",
  "key6": "585GFu88EMtnJ7idU3PCCyhBjpNCGpKz7rJejLq1NpnThqsBRLWs8REoFt3Z3NS65xyonYKdePQnSdGd76rwst5c",
  "key7": "52bgSP7XdUo9DkiSe7Tt2QVMW7KmAxvHrLeu8LdbCTcaZS1Psuj6n9tEJJJ1yw6HL8yQvLevZxBarH7YZN5wDJZr",
  "key8": "5QDKXD18sZ9Xs1Wxaoh75seFz6wQQPcVtrD8WzozBwJgDLt8V2LfcaPt95f6BHXnC52TMJSPqTcXTYAoAquRsqHz",
  "key9": "2JLAR32H7YgB6YoakUYUv9k1DBGi45RkFPjTe6uksxtYMDaQ8iGPX3DnXUG9wuBf7ZB4nj6o81HoKnubYcHn7MgK",
  "key10": "2eq7nDViEbuJwPLZXEGCcpLBjZkGYr9pEtznNQv64dgssy44mA5kF9TWj29aY4mPs9feJpS5mnEHs7LRRwg2yrrF",
  "key11": "aqDzmecKNVZgAjaR7qJJcHphgHykAix7UY9sPqaoJjVMaV7PMVai7paC6V1rQVUWCjEv45uePAyqsmYLJaw9cVt",
  "key12": "2ntU7Fkzk8yDumMSLgZ6Tszpn9viNC2SF6i5wCSvYyHXqcdS5njTgMW97YJQefuqGzk8gMgNasMewMnn4ubMzwkq",
  "key13": "MvwNVX9Nd9N8SJdmiFXBAvhd61qMPGRPi3gcLcmN8i348ZsqnmnG1UJVj8aM7U21CcHsU5mmRkoPT5xvgdHLQo7",
  "key14": "2epFRynFsJvAhmZ2vhtpHEUZw7V96uHRy15uYSkZVeHjaT2nZoCXddRY7GrSVdBU5Luaqxqj76beH5HUngriHTNZ",
  "key15": "5d1BccXKK9Gze6g1hUiehRaUWXMKpPb5Xq3am7HyUQLo6p6G65NFko9US153LCgBs3Tt6RjE1HoD2oEmJ1skcZKM",
  "key16": "5AaQ7wQnU2BGwd6KZyh3ENJLoJ4SbPoBGXoq8b7DUeVpBz8bpxqZS84rf85aExLXrHYNtDAqxoJM6vL6T4nP62eC",
  "key17": "36Qk9ZFthnivCJHd9Cf8iuo4MfrJWL76q6CSVczdiNTW5upKtW2k1uAqBdA5awYMQFkUuaLUazguQbrK4qE4N14N",
  "key18": "eocpcVPL6pAe3BM5iuc3svzwfeRms1m2XAhrjRd6q74X4BMr3FQtXgt1MXxAhgKDDY8PSjG4KxP4aig2a1MZXa4",
  "key19": "2PA4XZZJJRZRQ4WuyZpGdue1xjooVsySwn8Dz4zH47obZRrdLMGUGFgrPYntm4SJ4GccLFxR7BxdqtRAi2nNg2Uu",
  "key20": "2VMn9cgyBChhL5n5TfubpQdRiWuVMWLfjEFDLPRvQBPR1z7eB3tzsHF9jpAgky3Urhfpu7nV5bqWhtNQZ6pNLGeg",
  "key21": "5N67Ub6FyABNPK1mFgL4gxd3yfRiecrZmBVujwHtgBCTTimzPQXnKac3V8WQN4JToz4e4HqSqNaKyzQJPjcA9RTp",
  "key22": "3CiggnKDfGJ1dbQfLcZtm98Mg1ZGWZ2SJpN1hCW9JFP7hEusivJX73v11SY73NndzrZ3MYUCuFcAhcYn9q9zVKsc",
  "key23": "4D3B8iWx564xTpYMd16yXMspZG89aSwRQCgVchqbhJZtz1K5An733FwiLxqGNju6CCPShmfab6pH8khVi1SR4K22",
  "key24": "5yAiQF2J4MtZ4ZF6L34d3Ao1Qeu3DuQa4GGBq224oqg2h1QBNwkbNgu8vvdX5GwTiSx1TzFfJT98NTu9RjhCiCW7",
  "key25": "4nCX2yLCXhgLMr5iQtr46eRFEHN8jiJr5ebWsVHt6RWCv8cdXFrD1UyGmtcKwvw7zT2NZ4628LfwjEtpk956CaSJ",
  "key26": "4fChP96UTbm2d9rNty3XaEdXLzazndD453PYDgNZesN37aETN3ByvBz93bRRV5jmh7GbcB5Y2r3PqUCE1wu2mbwb",
  "key27": "2gY3uyqvXAHX2zFKZQqwvEGpXp4tqPRCK4YQ7ZEwQHH67m9PMGFXxMYn4JbhLbaLPNT7SWmGwZE7EjwJ8PQhajwV"
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
