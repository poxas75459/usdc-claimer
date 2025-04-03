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
    "3q6uCC7JBcjT4UBmqM9iwHyiwaViAHUyMv9y4E4k7uqhgz7ffStY2LaBcjWZseXUMqCdc1odJCURHAyWSyJE2y8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21dzTBzbEnVLi1v7tanoanPD3zBm7EVHpAVTN57puZ29rfiSsV5vVYY5QghBhbsyKhNoQaDFWNk1wKz5fYqaeFws",
  "key1": "5ncwordqgZEAGreNLr6kEQrUjCKk5HUSsReUs3Zzcu77NqxwoVExG6qVBzUtFjweYZRStynceAWJh5rkhMvey9Bt",
  "key2": "3WjWdw8rSRdmLuL58YNFWd4B1JjBPwPQxw7GKUqR6jYg73Df6Wv2otGzjneYgr5gfhwJtYKNC6UGrrw4mKeNAMji",
  "key3": "25nnFKBhZcncv3PBvKCvbNZhHPcnhuQooUsWfGDE4s3EFwFHad9b9dQ646UZZcumAyaSUucJTiJNwJ6jpBbfg3ur",
  "key4": "3yeTXZTZC6mMoHzxRJRywQ82yuNWhD9VeMavKDthJx7bxyxzqoFtrEeZkf7fZDDA2jSBotZR6szo85vscGjJ6fY4",
  "key5": "bLx4Xfm7ZgqVkdzffZuDYLaxM1LA3UzXPkioSgxr8gLAQykt2toYbSQHQmXwQDJ35mLCCDtBAJPGoN4pTj3t1Ec",
  "key6": "2wFqnsnDu4Jp86wHBYfv9G2oen2WCjBT9VYBJ2xdt4GqhHmw46mhkfVeFsftVdqbFRi5Wa4Dbt7HEbDZBzA7HTVk",
  "key7": "2KNAKrF1abGj5BEkPCHQghE2eLdzqfRxzWPpd748Wndc3XP65RqRw5npYjMDNLm1h9bHjxuMSr14BvDmJ2rUSq2B",
  "key8": "3gL1CUXp2JZ1qeYVGJc5TxgRDQqbczSuu8jj74ymLNGewMwfRFZFbxpjmxsLD9F96hb3YgTKuwz49yrpeMAf4Ruj",
  "key9": "3SZR3xyn2cdgzQ18m3e9qv7QzhmqTSEDmxMYKcxSKwZ5rrQKKZ6gqr24jvD64vqj3YTMaU7gbJz1MLKarW5QeihQ",
  "key10": "57mDWsXRZHwYer5U4yzwivKKgtUgksm7WpvBTVUkanhqQtB5DiHrcz3owX44Rs7h9qo8GHwANiGY3pQeXPD9L4Sf",
  "key11": "oRjv8omStAedfgyi4jkdrqLMx7CG8xZZfSHtJCnApsxKD4HDsx5kGYme2nmPHLqWCfA2ih66erCuk3pSbKBik4a",
  "key12": "5psmfFZqbTgJD8skMjbGMUvn3cViXmbCh22yrtvxLW9EzDHNLuWxyXxgxZ1783DYG9UErErGCSoqs7qgfuMH6Tnh",
  "key13": "3qVJdGbqcwe2SgrY2zxjmxexuyC4tN37GEVcxLexmW99dec2ra37do8gAgXPGqTeq7Mj3fdt6ynyHVGgtn2JftHM",
  "key14": "2Zy5TQtsGTquS4ruw1U2QAfeuwXEAW6uCYXDgJkC95w5HgbqnTiwzyJvzhLrWmjNHKFs1CbENA6iDqCyVdhGLDgy",
  "key15": "dq8DLCXb5DwKfTr4sdVAipM7VradjQwSyHFEt7PsJ3R6XfZhjzAJQZ6K5Fu4aiWUWneyYhHt3mz5BJGe5JhqLbP",
  "key16": "4U3FLjAfG26FE2jnRPFrWfFmscWssVXHkT1pcJwEAVdZZNtAWbzY8KyMZRzJQyRb4PCUXPePmjthAvrP8ck1LQ39",
  "key17": "4uVJAauxwUrMjhvHdG5DbzDLvGroMM8WaRKnCiA2pUvQvaLoPfnFa5CocMb4p8Cxs8UBiUWCwWoCHs7Ti6onQY3f",
  "key18": "47aLDHYkzA52GNBQNYqdHhnJA6hrHqxPHqVBmWBxW31rHuWJXPnXoxXGSLA7k1QqSzr7nBTNsBiZUSuB36Bpo5mx",
  "key19": "4S9MF9z92syFTkdS9WdbtRKfaKMsdraFr1FnFtk8sKdztP3GxAfBkbb111g8MeXiNqgibjmM2jCQ49JrXmz72nJZ",
  "key20": "gb9FSzGRedDPSpYYYbff2exG45ZKJfsZnct6hb4PagitSkipPiKHD9tQZAQfp5PpR9B5G8ySXeHBNUXc38rM1SV",
  "key21": "FvMgpxuTqtKbwFxVdoUoR3xs79MNKq1zVGXTKxva1aAC9gmVFMLydC9rke7RKL1gSKSkmsqHJfyuNoNkzXatSXu",
  "key22": "57tSEiZNPsKJQ8FDv7mHu3oWxysssCS6pd9j2TBxRXUqTYp1QzvTKAkVqkT3BYz8Skio5bBw9Ci9ku7BAMRvx6S1",
  "key23": "UtRhN4iUQYJf3NhQpfe1e1itE73NkoKNQC1rU2j7SeTdyxuGuuKX7s4z8uJ43Ru1UTEe64keJq7YBmdY9eHynS6",
  "key24": "cPTCpufNPJUHdg1uAi5xwpEPJ69vmhcVzT3LrJksxF6rnAdkqUrYjth6cmCkguvTCeEgGgYAXmyF8xQQMoJ6D2C",
  "key25": "28igQav8s5Mya21pBahYyGPjo8C33w1u3YBjX85z9jY6cG4bAPBb38VCEZVzJG1nYtFsqzBdnHnPhBMmZq9VdvDD"
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
