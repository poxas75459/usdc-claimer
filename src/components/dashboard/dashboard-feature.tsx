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
    "2imoJAiTP5KNAfLVC43pkbxZgqR9PmTAJyF5XuMKEiWTD49LM7ApGq5sAmQZWYA16tF5F8oP3d1veBt81Qus8KJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GUM2CXfdGwjqsPhPQNBvXDKLyaYnMV169wp2qbQj18Gcjbhq8dXwguD4jhFQXKZtgjMhwpEtV8vhvTrhjGkQA8P",
  "key1": "vtMxEjYvbz3KDc3hMCLwYejNJRuJupvDJQzsaWCPAcfE9SBqcpEQCzGEwoSozZTzcq7WY933WervHqci2c8RjZ4",
  "key2": "5wsCdJy8EV8Mmv2CQCxnfKRWjcsHMvYXSqLqaGAK82HCcYvZ78VbiQUMPZaCYsNEJUojiDArj87o1jduDfv4nMMW",
  "key3": "5vtaWJQXZtvtnwkc5NjMz6A2SReCYDst7YrqfJvYAhvLdqUAZYJKbhA4tVUbrD45UFJwFye4Vcom21d63GKv1dxL",
  "key4": "2zHjA6HSZ5Dgzh9qBJ27oX1mrSepwdpZJH2PhWJUbrFxhWzBBhDe2KYpAn573EwmUsmch3p7kGtWB7jLWk2oMhrP",
  "key5": "2DC7joXS1vpguNbvgUpKVsvyMp5mXKTztVDKSpShwNK9rSV6fDUgvSuZsAxHhpK1zFzviwFamygqHg3HFkr4484m",
  "key6": "2Njr8JudPM6sMb1exzDVAJ5ZBHYeymp9x3fwNaCDoTt4Fko9Q8PqCQfE4Sik9iRbKW2inqqhenijTfjNauzv7qjE",
  "key7": "45tpMkpGphuBqRM3uYjnqBcBupxm6agmvtz6q9B3TLjkecEGfkHBNJQi24coX6eyRPNrXVvowV8hxD4zXrqRm41L",
  "key8": "2Y5Tr2gH2Gj5afHSFJdjj6bfacweEgKc5aroMpJ9enrdwTbsbKTwCMgwqw41Gq9ika9DbUdHoT8pA1UoogMs5Cmk",
  "key9": "5rTzrkNPiStJVvocqX6FDTCn5392byaMcBbkBcJVDc9jHtbo1zqP8jkuZu9sEDeteUHdshbXyz95k5uyeRYpWePh",
  "key10": "dPYZDFsgkzZqEEvhBwgVHsSJNDAyWZ3K37xMx1jjqZggnVUyz1m6tLUyemFi8QV6UYVv5Q7DYr7TLCfGv5NF8Ux",
  "key11": "33HgMFCns8yuiFYCwthL9kuwQAytx37u7nQGjZZJ23978DwtNnTsMEnhsSfTYndFtkmRJGuUriY4gL1nGkJGRdgA",
  "key12": "5M68NvUKYbjG11xxgwu4jcW33YFBJrd82Jb2C44rhiogMcCABuNhPeYbCq94Q59SrLsdHFG8Qu4BV9zMqXK2EHcw",
  "key13": "9rCkPZrebs3QWL82GeASWHAKU9s1uRaZMJKTx7gJVzUF7Gj11xKqiEDuhryLux69EgVmM8iotfp2UsVFhxEmwCq",
  "key14": "4d7ok3FSZJtZydbk6udXXJY6HAtdP7PMNbdkbcVSf89SAbNCx4vi5dgPJi61ym4ViJPqaXVzbwnP5KP6UiryfvBZ",
  "key15": "4BGKG8jtXGtYRPgQz7DZj2XLsecrFY8dg7zm9ZArb2rUjUfmLMqRXqc6kR2tsWvRHcu7pgvER8qDEAH9gTcKZgDC",
  "key16": "3LGryWFETMKEhtZdFPFzttN1nar2h2yiTvCDTUEJUNv6jKkrD7GawvpZPotdAAJfQL82ApTEP6VLmUms9phgiTCu",
  "key17": "2AqMezW24EudxobNvD8ETjsGMHBRyBMfME29dfJG9a8D1bPGCDPvB9zqinqEsB4eCvb6dXd5vAZiJBh4m5yGY9Pu",
  "key18": "5xkuHDcWJYEoHTpe1Gx3pkWXF2te5smV4ymx2uwAxqVb2Cy6QFn5gpFqr31EfXbF3mDYdh5MFrWw2vyBnc8wAhFx",
  "key19": "KJE3nK1puxxFZkf8V6xNhnnmf3cZAL6jdvRXFBN7vgjXw2apWn5c9ANnWuAU9nNzWuxjE28PBG82Rz6AG2ZiDdm",
  "key20": "NjNF9JM8z36CnY8d6KBWocWqCDmL7VdW7TAUgqeXTpWDc6iLCMJeQhXiDiXJaGL47w378U3WGe1p6Zi5cwaHeaZ",
  "key21": "X7gwZwRFFP55CM6HfZ4NMdbqNBpfakm2LYSWiCwnXjCHSA9oX1kMAPL3VyK4K1tfdrTJX4pNqk9vGiSz6YRFUPZ",
  "key22": "34ftMFEepPsUQ6Hnr2oraWjFGqYXPK3hygzBqGSExteGX49APscmG4ym4nE3wLytLGRT1CECZu8mtFbwa29Sdpam",
  "key23": "3UQhEV4JL16FWfrg61AAjzMrcMdwRbF5jhDqoQztNwXjotRPmZpAcBbpsw1Nybd8GfR66K6Bjz9W5vGfG8prKscS",
  "key24": "XcHi78NSoCqy5rWVDcnxpmxS9MmbRqdS5ZL35pBCTpQvrUHM75Cnny2DWLpgTTB56LUjuWVsfqqdMoYxhuBexHe",
  "key25": "4thbtvMBLEhiHyg8aF3h6Fi68BbZDdQiqJA1S8svCbYg7TZQD3HSDvVd2GcfDGeEi29AEHDdfD58sthto82XZFWA"
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
