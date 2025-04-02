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
    "vs78PjeznJSdz7kSs4yAjmDtXdceN2ofnnzNQUtnWArTrgzwbgxPnQFzyv8fDzq2zZCbWfrcsnuU9shxxnixAVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YzVPo2HHE38kf9mYxTp3Ny3cKTKXZKsZbFPZKb1eDeQRCNY9qCszz7cRTj9NVoRGZPHEFWk6KuCxGuwMTUQeFyV",
  "key1": "4FHpsL9AUVMorZNPYTPxBTWHv8VZvXQgv8dGJDrhk7VRzjJhhXyaVX9byu31je96P5jvu6yLxAZSqLSjoXH1tXAo",
  "key2": "3XUbDgrpuEyWRadMppPo9tcxfLhwVHrUECt36Ps8hRA24XEfRv4UNcmNbYDfgXh5Mf58WXZxU48xo51tc7qebEcD",
  "key3": "2XQHnu3aUbM1xZMri3t8eCpMR1EWE4fBE5sxDXw8d9Rqw4wJSoEKipJAzNwY2SDfvea3s5Lvjuc4cg4xBWVwQLET",
  "key4": "4tFNFYjnxVgKQPU5mN34SUgzz18W3PERpeSpuaEpJW91iimDt1m2BgkKVvHxv8CdHSpV8skQVSa5m97YbxKM4mm2",
  "key5": "3jqT6vhsTpNQ6LV5ygPtbxYfLadkze1YhoNY2q8sz7qKdNof68Uzc1iqfdFaMLbbkHWMznkdLWegz1H59MPUsraA",
  "key6": "2ut4Eyo6QVnJnZmPnoPXRD4z2wnjsgjRq1h8BbdZyeqWvZFhDNsrTGrcihwatUk48qVr2Ex49RDWg5RSSF8tJB62",
  "key7": "5A13K1eJFyVFT78o8YPVWcLMywi9VGo3Wt4Z2c8qLaR6iFjVGyUHFtUQQrpdpMFQRkxkz34DT6ypY7uzfvqAzpH3",
  "key8": "2es7QMdREt9ygLMHykNgkKs18BU33zLT5jDcGDSPyK7hLEd5Fw12n93Q2nMrwWavRemq9z2hUWJ9SMSTtqU6G3Qg",
  "key9": "4XknsAo9XU4amxjjSoQ6bPHZBGjRPw6pcukxvhdH4ousQVHACCuer5cy3S8jQeENAkwg7ctPhmTgnk7rBVYsXUfq",
  "key10": "3cmJQPAYUsuqY2FMvQfjquZkyaZVcsun8LLNhdtkuEqGjciHFciBBjzXHpASUoSfZbA6554M3gSoG8FVUti5XdSB",
  "key11": "3pLwGwqBvSFGjnnJawjnqbRP1VCc9xDQPKN7ywBe51sbX92P3MVvkbL7WnxKNqumcAd5W83nhgP9Vp53cerrDuc2",
  "key12": "4Mqkd4upZ7MfdEr5t69vcwk4YHLiyEJ9J45ajfg5FDbfMkqDJwZSpz9kMhwjveSY4qtC7XUrimoVTpNYCc7H2F12",
  "key13": "PQhSQvBAXX7r7FAyT7stbe7d8jm9B2XyEKNjf6RciyNb4px91N8jgfMTeGDsBZ9tUQQrRk7PCiEHjfxZaPAtP8D",
  "key14": "5hzeZKHEHAVd77psZkzvNt1bqDAFsirhKLLqiYGmZzStmPhWkynABJAPmHq2BxQdBixt4KvkyNeoRL8HHxuxzuYG",
  "key15": "4pNbzN93beipVfjATaGYzGh24XYBvcuTZZbbcXEDGHotBBdNAxCSr8dMhjgzM7evM7mEgzWPqBmYsN1eqTMn4QUj",
  "key16": "Ly5zPP4EiEqQJWCWq2ycaQGjwRudRY78BGs5mkPYGChGzRZbdVNYWEwupTkvGdEE9GixL9jWXUC5bPCWkLUD3Dv",
  "key17": "5YQW3WZ3rDNvH5hToZokYGMD8rkPeMxr3ptu1GuadB2PFDpbDoLC17ffMkhCuNbAENrc91hoPT5xPwaAjNNpbvDq",
  "key18": "3qkV588NVVnnJdwhnDsnZYutXN1KexBrLNHRWsJMusj74MSeFZHeYXam2xEDJX1UuWDwCGeWruio6BwB7JdgxYGx",
  "key19": "25w2udzCbNrURNkCzYihGYa1G8eEky7CDQrY2U8CX9ZVpWfUa9v1AaxYAiRfBgSEiU3L5TWMyA3drhajcFvrbQFF",
  "key20": "3N3Fa9DZri9Fr4ofADRmisafuDHeFMyNtKkxKNofKLptLDBDYKzSx8AwLs5XMpPic5FwP1s8FkLLziC4qj2j3Heq",
  "key21": "4QNCqsfVHNNk89tbv2Qe3bRCCegDLKY5pLWFe74HjUxZyTPaj947hLWS4EsrQ5FP1XHWEHN9Vo6UKR8Uvk2BbV2R",
  "key22": "3CJiL9mWw9tLiNaThAeMftBmSp8TMjQhSkCAHAFuqyxPtStqv3cUeVMWqVVrEf5VsHQSpiX491gPHGKuA5LVvtei",
  "key23": "FsSwfy2DxrJdFjChC6nAGaLEdDKusLck86d7GqzmA1pTZajUTMobwqwkkMdmqnaFV4cNpqXdqUsWpsEURT1gijY",
  "key24": "5ygp5jzqCcVmxx1RKBQ6gJYWBWguUo77GqzPij3BVtK6dkdmGaL9j729Pn8kSoyi1FavWTy16ecdxST9gT5YqHLx",
  "key25": "2mo76eVaeSTjqK4usY5ouchRrLa98sv1WnmSxgEinhBh29mktyaxdUMJQdU65xrr8cHPq6Ui2pR1ueCxdvusKG9L",
  "key26": "GK3dbg8nnd5gPUDTiK5Nce4UgTiXFpGVbxNELeLxWinhps3YUmLyrbrNnCLybgJE4Byfqq3SbCKLh6d41eR8F1a",
  "key27": "22yydsmeJXnU81ETkJygpjiDvbsAfuSLp7qSmFbdpNrhRaHSFW2GMsamwdWuvjiZyKVFtxuyYdyAR1rvKX1KHm7c",
  "key28": "4CmSYTNU9aJaQgtKVLpsYxJetcxYkFZN4WrMTSVqo27kM7oSJTYjw9pvRMUbUh5Sy5vi5jaGRSXo5BczPajwANiB",
  "key29": "5PeMpJvBZzvEY9tyP8WfGiVg9jybBS6JZqMyFew8Wotf4q3W1pepxMX68hBQbrpfFvnKnHWjsMRp5CnARbdyVzos"
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
