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
    "Gdh3uXQXnTcXrGEeH3fbT2d8e2rAwwDXQbTaVpBsZxVM7dCFjsP1ASKQe1c8xk4K3DsGzC8XMtMGCwekt4heWSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BEtfeg67h6YdzmZENrkpVTNzQJfGpJV9aaFM29qTTqFpzrnquWyZ3sGRvBm7vgBWMixgRbLdFkfbYQpEdkbvHH8",
  "key1": "48u3wquBkQZ1z8MxuYswxQrvv5cqc5ndpPPFqpJVnw2nszKHMc6ENpLsmpc4H7YKF2AHUnQ8RofRAQpxhuezdQRE",
  "key2": "2sh87VrJbYN6X3ZChcrpihPWXWAFgoiQe3RRCn6vTAnj3Wf5WYuB4kCpsSDovFgFT5Urcjp3LTsBerXMcUtUtfeR",
  "key3": "4Q2BBttJuKMWkktaj33JdE374M2MzLVVx6qTxiWC9NU44D4CHNteUDkEfo12g9zpDKErBdAgjS5kWUdRnwsvdmLa",
  "key4": "3DNGHybNBQuQJs1iEqXdLw2UZbj3cqRTHPLA282vtcLmAgFHsscjCMvqiy9V3dcHTAgfbC8NsKBHSAEGWaw3YcBd",
  "key5": "2n1y9G3pucKh84A6ic48CWhLRdahhFUe4HeGidHLpuZa7VMSdpf4kQuB2Vmp66HcoPzcDNQUSVXCKtRCxrq84SBa",
  "key6": "2ad9AcRaVWynyE72tjzLgkekEMyxsoXoGcQ5YesXZJpx9AuvAjjtxf4tqboBopyMdxDwSci9MCgtR3MCcsnkujZy",
  "key7": "3WGJzvWqj8JxKJRSctooJd5MY4HwyixfFpgFTpq3LD83jJzvQFaxuwhnyyRd5PqCU4Z6pgPy6CtWhCNaPyg53JSM",
  "key8": "2XaT8PR54MeBD6eZaFJPV3DqmQb7vc5osicFTd4LkgTfdmq7hfNF5J6QuxQsuKFgoHEbTuG1aPyX7ckA6oYUSmZW",
  "key9": "3D99iSqSFneV9ogwVViFdjNyeoufRwkeK5p8htknsJEcox2AVmoqdh2UcxbWmT2eUssaradhzvHPs8ehHct8mA2V",
  "key10": "3Djx4XBHHQ3THBGvLgvVTGSnWUn75H6qnjg7x8zfXbsiGY799xmdUcqvboyzZAkG4iLLdGzW72CwxjGrqzHdshTJ",
  "key11": "A378sZgfsDySiH19UkwDQDYodprCmoZcLNEFofYuFJS7WpZ8Ru9mvq66LjiRHqwoqMgBtTKRWN6yZ63K2U79Xip",
  "key12": "3z3y5qyDWD1EUrkwCY76hDLNtWwSeKsYKoWX3txmy196XNXMitN6xZqaPEaGwbPHVWuKr33zsew3YmxAwSbFP8Ti",
  "key13": "n6BuNRt15CpwdRzdQyYvSpYtz3AWCveQwJ1gGp8v5V75fnYEeDpBmtLPLdFkPTSX1kBi3C3xkn1adBrrQu6zVG1",
  "key14": "5ZA2mcmBHUtpnLFgBZpkngmzvecy6TsUzaMTySsqkTbBMnsSEnLQpd3aaXMpXLhh7pfZvGJQEo1aeir5o5TpZZTf",
  "key15": "ji3yZ6iwViNhqQchyQsvTcRKyyAtPUWm8SWrExWnX4VeTNuwoCSXR2FnFVUyG9VqrgPLsjSTdmg1MztUToQzheq",
  "key16": "2xmF2LKe3X13m3fQk36QVRcLcdMWoXLFhgWBtFWXEtVmUvtK5WaKNxYF3te7yULJ1tpCazqkGVbDXP1TiJEdCfVG",
  "key17": "5bbkW4AnLfrM8bX2DABbtvvQayTgcLd2Gee7swJZr798TNNC8Le4BCp2h1dcSByHSfxXaeX9gQGFMJjayvat4uKT",
  "key18": "Z5bWcNrx8PiUZusy93pNGgWWJECUrWjTdgkZh9reFqVFHxYo5GaSx19BMuAZALbyYq2KzNuPi1JJjQWHuxaXB4g",
  "key19": "BumohuwJsCMZyvXR3FjabuoLwNV1rXvtEtgfBZqhYDEQQCyZJD8MvVMqGHLz64op9GaaMsCFQxkT1nbzbgU6RhK",
  "key20": "4Q7seQGmRMDB8QV5U924U5thbjuBtKu2arLy5rBFNkVTtxSq6eHdcocM7QyY21mGzhAhqvBvSruSSMJzUi1dMPvV",
  "key21": "63JTMgt1sPqeb1j5adn2mgQoH5GKyoG7HuRNnWUL2Qn9c5NQF5XEyaeCb6Z35PkYApmHJtvS7QD26WmNG2CL2k9u",
  "key22": "3kbjbke8dMEfYtejnTmZco4jtLeLUgo5bDJihytB2Zh449YLqN5Qwwr6U9Lp7i4Gh82wEnNRyQm5AK1iUQoLBnss",
  "key23": "2P9ke2vKhL5KUsqWZP9rMGDyFuyCxPoiy8184sK66x7Nib9wohD7pcRJkvpuei6dtwTRaKoDWBdKYkmPZCEUUfBv",
  "key24": "HquktNN3QoSzknAKg8GzfYcL1Btbk64RzGWjNE5xJC1FTJAH8gqEmWtj4ikSfYAAVSgc2ReRo1k88JSghnUHYuw",
  "key25": "4ErGFbjiNwy84SQAiKDmgaoRjcA7Kx3nZBqrEP6Vbs3KfJR3eXGeqEN5GNvqU2TsSDpq3x3Y2yBv5UZ7ovnXJK23"
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
