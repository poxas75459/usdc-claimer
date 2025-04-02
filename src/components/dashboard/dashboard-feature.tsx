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
    "5iTc7pskbgCp8w4kX23etsFegtPteaVDAZMMkqYv1JMyyEueYJpgx1vmH3Ef9JSKMmZPuud3vkjzzWHNGPZFxCkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZcSYuJkWtwWySDZUjzwpK7BcM6ayCf2edp89pQpCG3tC9MXrBBpiNUGYgLaQQ9AvLEMfNcJFyhCoxmjjp2Fc23P",
  "key1": "4gP9upH4ieH5PFrDnMPpFiB4dwbf3QRCjRHXAY3xEcbgwm7KfgGVFjSFcPt653TroUgrU8mvXKbNmJrRNnKj1yDv",
  "key2": "4B1UTJaz17yqKe9sQ2D7NPt36qTdPvAifVCfEgF9tgj7m2sA6YkXVJn3hMahvXaRBM8N54cn75koKWntK6Dhxp2H",
  "key3": "4e4CbV266b2Yc9CE8YbgJCAsbMSZvyu6s16vbCShgKMq77xQPEm4w5VMch5pFSuhu1z5ta4sNJ2jwbNUxkWgnv6L",
  "key4": "5EmaRRaUyvqXuxHMrBhUC8tT8UgJi2ZjLNB8exNHsQctt61kKSS3mX59L2ZNmkKvMu3yKVt1ieTUaMBnXV1n2L5h",
  "key5": "2Py6rkyG6SgU3jzKDPPbFqwhsgokbyqg2CWYieesvw2bz2kS92qjfMk3oyJG2pa7ou4dm2cBZV1HoZdbWbWESVDZ",
  "key6": "StkvDSX2KiYBczuGEgMrBVTeF6oBiGb4XAX8PFvXzYP5ha5iVy43nB2N22Mb51TuJXsvUQv7jJYBwg4dUEL3voq",
  "key7": "5tZEXyPie672pNPdw2xF8FZEQ3RfnFbASD6z5phzfKg7aZe7XdaaFtxeLsP3hkS4fCmPaSaySv9DxbEVzJHtkD5j",
  "key8": "4UhSfZafNQ71WBPKkRJK5TxhzWsqFRa7LwDXRQ3No7j6diHRdf28Sf9vSRyjwwWpoNtrpPwuCh7A4j1gK9SPVwjC",
  "key9": "2T7B3vPQ42qvR438PRacayfwy7b3r2gHaCXLsrDtFU7dtNs4HCd8YhFKFKj7wDsR42RHeVZWXfGDhAhfnQxH5HNe",
  "key10": "3f7iptiAdc58bZQeAsmARJTnNPLbsn7iM3rbXAtH8kHsW7QE1cpsdf4tZZEjKQASnXiuqRjsGWVSw1ahRKx1Wo7L",
  "key11": "454mMPqfVoD3LmrS1mMqbG6b46EEXfu2o4kQUJ5QVqkbkfJqfBPKnMN4bSsUzztfqZwHAHgrDf9ZqaVd9kpN8DLz",
  "key12": "3kYW1S92qFpz3Yrv4W2FAVx8s6goGpMGAifZPmWE5WjS5tA64EWnUayoBL6z85v3jG4GH7pt8BXVjPbdpMhFJz8T",
  "key13": "3ATmrJuLogEcYnVE8Wph7GBrDHzyQ4ChYe2ZcVfe9tWtEsrrHjh6eg7joEMwfX274iinRLvUezaCdFpvyPvLFdN1",
  "key14": "XKqxh6kw1tX9NZmzeAfcgrfJp7fRAWokYoKKWW6F2yrqjafVxBLhZr97hGZkjKozvS9wKsV9wsuyzdMJ5Z43gKk",
  "key15": "CL8j9nd9DpE9A9vaGjbijuGBdNoxqys8mEi5Jj9BTXKQrSV3ctMj2usfh6TMV2mhhfcz5KRQMYwSoMLF476NoSF",
  "key16": "268JnyvUqZAAzRHbU53rYzPbZFx5iAEtPQJPGvoh6Ff7Z98QBW46XNscwV8e8CaaAsDXz589WqEM5ntPUzatL4v5",
  "key17": "4x4Bq2i5HHDTK8DDrTdQFq7ThNxkEwqQAkvEopFEaqjePw7x7CKM5AY6nXCtsp3Hc945ggtbwJH1sZuoBMnRrEH5",
  "key18": "CbWYX7xFnSf4FkSJXNyaAMUfPLi2G4GHjwLVPHCvftTa7DLs8nTLJWLBfSyGHXApmQbxpkAcAZxoU9z3saemHf3",
  "key19": "n8GqLPsAyGtPNQijhTxEkMPGfdyvPvQqUdZKP6WRP1x5RoKZzTVimv9DKwkerL3sGXp66yNVVZX79557Am3C2jn",
  "key20": "5pp1kLC98GeneZrY9oofccb9aCqyw5KzxG6CnMunkZgPsywiZcw2VdmqamPbrMQn134UhR64EFEiy75updLVBHsU",
  "key21": "3wY7UPaDDupCUvqsqRcare6XEAzyXPkEveTFHAMuHSsBSbsgaqXUKCSCwFT3YK71v8SSrRzmPmZqCWTUQPZfswhV",
  "key22": "4SGn3kxXYST2TcFQE8rH8MfdqsU8QKYy5gn4NsCycWB16htRidT6BDctfpBhGnpvRTXQv4tjtCqQ3wXQZiegEuyx",
  "key23": "29v8VAavJfEYMG3zyvFeQzHSj6M2r6fXvNsfn1crRxyDPLimYHN81tjnDgdsAAoQHQ6qcpSWWFFPu7DQfKFKTp3Z",
  "key24": "4TbQDJ9VJSadHspZUuAW8nNBdQTm8eMkT5VtNJfvGZ3M7jV5jCYySy5stEc2g1X6o9bFES7f997BE8ToqYVuTDYa",
  "key25": "3AXXQfyDJzPAN1Sm1KsgeUCLKd86JxrRzCfn2vMwXmC9NjL1Z3XjyvLDRe3souKSZ6hL4oDqBfmSs2TPkMX4thVn",
  "key26": "kqv1SEzqMJGYjNnzE7sPE538rHqoLQqQ5fM2uRLLc3RCjbufR3vBAQxRYHUL3PEnyNiLdSojFQzeiwk4GQjb6xH",
  "key27": "2RtvWpmfHJbmdw11mFPnVBSo69h2HNcS45kQy8vGfgc1kAfTPomNkjbpFYCenTVb2DtLM4LbH3cbcuJBckhzywLD",
  "key28": "3KTCjRjEVdDjWGFKXG2uBGpPD1d8sWnpzjYYjpEaK7y3MSvRUDNZZVsde4yNUVs8ufSxWUFgozZJfPE55vtAgBpj",
  "key29": "3UZ6tpuYeJytEjHqYW5vJwVPS7opSyzF3pcgHCRYNAWsTtKEikBev9dmZZKQ8wFVaC5115DBUF8sB3YRyn6A8LXg",
  "key30": "3s7RNbL56bm2wtm1hYQQBfDUL6tkK6naCHtUbk821kC7zVkC69mEHCcrnXfXLvegzKfsQuExuDT5YJgUre5HXtHu",
  "key31": "25WFaxjvwcbGceGWuL67PQVF4JWAioignhsEDi1cryAG4D11CqqjTreBsTvEUe2ja5zh3SRW5u6grUvcc7xfNmWa",
  "key32": "ja2et3TkvaNGtzyhhXSRGHDmF1Swz9arbm4z1sYydyZLzEu2FeS4aigLHC6M9KobtqBUq1g8FAVarXkSbzL16oN",
  "key33": "5NXWvSySeBPLGZNMRJ2jWN3GE1eF9yAeFDFuaeGvcWN59hf44bBkR7vSGF5zoSk1wEuKxCghVAZrdLLofpWyJceU",
  "key34": "jGcy65LWQWzPXtJEhbuas31cUn7yQAbM8QhV6FQzyzEjQtRhaZ75m1yLqaxVKkT2WBWYffY5bGFTNUiTqibF6nY",
  "key35": "YqZhyhZuw9VdCvGfm9v2DqmfhPAdPgEHRogRhBgfk24oWwjGoTuxda9WjPttML6mh2gSXzhpHEcnT4Rgb7gzc4t",
  "key36": "4JFiH2vx3LdJYQP2DWfhbYiTYaPkvxmyqjbEoNBdFCE3NCCC9ALwDPCbTB7mHEtBssW37Y5rQsZQDbtdLBpoz2zD",
  "key37": "6vtioHB11TTBvPsKRCnfFNQnkbgJpgywa5cfXKrWQtWme3HGbEYvwUBdPoGvxM8ZYoARykkto6eLT7khqkUSuEA",
  "key38": "5n5UY8YHiL45QJvXGvi4qbPKMNzNCVACSuWsgyCk6F9CfKueSCi8uwERkc5jf87wRrnnrbTLJM33Y2MjpALTypmD",
  "key39": "DiEDbbnbDc2MkyGatYnHpb8X2wkAn428kcyf8EHHcza8gYfUJG2NnG9ahCFSrGiyWcS7jEhkkVpisYHrinA4BwZ"
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
