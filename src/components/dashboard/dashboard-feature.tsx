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
    "3PVoWKqCgL5myyAhxNV2aH9P2AcX9e4APEn9XQYzsjwypwxzrQ9AVsHB51k9dQtyFd5K2VNHvx6QtsciSR6N2uYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24dqzQC6ojUZErm5kSCcTD5JVByyUc5fTNManDGDxHnR9grPry34SLG8b74WhdiTwEMeekWwhZfY18yaZ5j462we",
  "key1": "Hfo1uy1QEN9FYtGyGecM7fEx99gmM9vULNUrSjtaqcqtCiKXo66hq5dJEhdbcK95twRSArfjPWWDHS6216kR9wm",
  "key2": "2VQnXxcEUkuaooHPmcnqwBszm99V2pMfA7AxxhmJWnvbnTVDzwnX9wT5VhkgiRAKPgGPvEdSV28DKQfz4vf6dn8f",
  "key3": "3qhxMcWkCN8yCjWDomBz8q5bLJ1x8LjLMEQ8BVCbyWdDvWb6trgjFJnfEXTshwg9EYJdVjJq6hjhvVJ8WP1oPXNa",
  "key4": "2cMD5kopjVrEhqtAjD3M6hqDknHXedTEGjc4MyTYTPEM16gZCQYTDfrJT1CwcSr1P6DbLasr9n5LDyFav9U4pwPm",
  "key5": "stfeLAnbpUswXA8DZWfec5PrvjhayfMhBwi1xJiWK7ETXFm66pyu4GoUzHdLgQQ1j3C5qwUEUyvFFyYTtt4JorB",
  "key6": "4jJ3xbTP7xNWNZsBxr3pH3TKKMyk2KvqsSD5U4kbRj2fG2fYc87scpHizwZjcckbzMFv3PjwfYX2qJxiyUHbCzVJ",
  "key7": "2jpdqFpyGPzqLk6xpingkqEUb3yHSuxKnZFVYp1ywQWv3vxqmtYSAc4gRSiuy23vFduuHzy29GEhG8H9WuJqBS17",
  "key8": "5XknXvWbgV1aGPmCWaPgCnypMTJK4s84gu6FphwX4qgKCeRgCkjhLzdaKeHHCD9T9uiW83UhfDPhUHJ7TSTbLYMv",
  "key9": "3BGeLZtLVWftceHocSMNT1rZXyTpbcMNaUkc7EApeMa3tLoZZhKWBA3shPMWJ86JynM2FujrFZ8UcjyTNCSyDFZZ",
  "key10": "4qMKCR5UXLspv3eNQvAJqHipMX9LefxYfP1NXAj5gHKYykDSQh1bo4XGW2Vqm7FLiXRHMFHr2kS7V5aDvocdDhSh",
  "key11": "2Z5CK9T9iN7m6YnQr2yRYN8roEoZqE7JBMUDt5Dbd8P39yYosKUgvNVBgpWSFKypjjjjqtDscpsgiadcqeNxwVwk",
  "key12": "2J1qbGmjdCuCwLVDiSx2qNKGMHvdRVuJ7yM42ibbY2VQhKJsbyZkLSqEFjszVGYQgtZm7P2phpDEyN6qeqJpiGxP",
  "key13": "4mpRsDcFVHKcTf4cxNEZZniq9UeTVjUJkFD5YjgT4R9yJ3bT5dCVAk7up3Uk1obHEiLRQH9hiFZLutSaoP65czX5",
  "key14": "4dibVZqm1ad8tJt1SNmTK3C48imw6HT8cUviJg6DVWhysPD1s1vEwY4U5Ym7tgmAoZLf6yZk5DUUbf7o11XFyyBf",
  "key15": "4DaAWAvYEPQW66i7xYSgKfc2oqLFiEP8BBn1dUNo7k67MBpy3CpsNjB2istWbnZrnuptpCfhA76FWPJS1Rax3Qfk",
  "key16": "4KJyxYENxwVkkn1Cj4xBUUWjEDaLiEvwmuWsZiua78bAB6EzqLhnBjLYENqdpMwBtJQk1ytVunAoAF2wwTjC3Ecr",
  "key17": "5hhVAWfb2fMWhPy4CEcs2Et5B9DgnCvSgiwC3eriHEY3QzxjQtXgB2SYKdpUaXcsFe6fEZpcCHELHTVt7QLWd1c3",
  "key18": "2U3wMxcDou8SNRphX8LvwsB7qDscvWqStgSRYYPwS5aUt7C2CoBRbBppDwFM98gnrYCcEMCz4v8LjtGeeiGGY9UE",
  "key19": "29Jp2RbcDzv85PgbQ17oEFhoaGigEzYivKvXPfFgyJSozGqbbqgzdoVvR7h28AXRX7DiZcB4TJH2ZqnN2woA41bg",
  "key20": "5zUFV6f9tDQ7ReMgpBJbb2s2t6TKBaVBVErhKbLPhrZqxB1BKNe8NRkwz1EkJydbBvuCqvE7hTRkahmVF93Vpjy3",
  "key21": "3oVwau8zhPLzSf2LkxWWsHW9PsKo9LYrh6t7EVK6fJY6BnXj8B78EtaWFKGuCNFodnqL6FrqPdfYX4wsXS1wKL2n",
  "key22": "3bhxrn13rkodkK1u6hWwkc8HHrsDgQagHx8pdaYt7fqSrax9C1up3otr2Jg4ukqE5kTmcT292hg6PXWpm8mKwUWj",
  "key23": "4TZegCtiSdcgKn2q6uHgcKrcpebeauJW1wUFN1timr3QucT7udYaSWuMpbwJRUmk4zvZDZzpiEJzDHUBHC9kv4dc",
  "key24": "VtL9KuBeikGmvDv3QgJoJP2cKiU7TWigNwgFCVBvLtFWgy5y2RbAQRnfXKN1B6UXeoCrLfPC3cFS4F6CHnGoRWE",
  "key25": "4Y377kiEwmVNdE4HLbP6w17SYJKPCLBhJM7S7ZfdkW9pvcfryWDLchNMKm6fWFsyMaUKXwW1BH93QPFd4coBj8yA",
  "key26": "5kEdjCynajmbSb8Df2gYN5MkbGVJpFATPxBuefSieEDQSi99XZuLwgbm4jkDbUpMhmkN1aCJWpCPALQhLZsVnjTw",
  "key27": "4HKNmpJWr4juCMLAnktV3xNfv4dtpdzL7Ktm17YAnEoRGYGbQY9gRJMfFvxJfbN3Y5UUDsW7Ex34KUvk1ZgpuPu6",
  "key28": "217cVZ1nWmzrwPSEjgC9Jhjy9N5p8DnwbVsc8Ricg5gsg3b2VF4kaaextEaNuZqebRUfCXbqGi4V8e5cL6yySxPr",
  "key29": "33AWDZZCfVS6uHDJcqWLWUNCm2yxAnJ7x1w7FroxH5MsgLad9tjEo3xndHbNA8xGtRT9vG154NpBbxbS1jS4t5aS",
  "key30": "47yWZEuw6XdCBaLzVZ87XpzY3Pwi3aRbXdPW1NYe6HyXdKLgZ9NogcH24WELpkopQ5U7iganHScT1jn8po5zr5D9",
  "key31": "2qqTT2xS7NR7zdYZZYjyeVSaxj1g3A3cVLVZY2eHYuLy74uKi3U2z2STP6AqMZANY7T7T9jWwJt2n7EHved3H9Rw",
  "key32": "zs6FDqZSXpCgB9k7JHhwzUGSSn5V6UCzxKNDTCxgpW14SGUYRFKg44JQZ7wBzRYte5DjmiMDv7a8P7cfdL57mpL",
  "key33": "48s6NzDpXe43yz5MNNVWTfAhh3djAQ7TJ1WMLscmQ6qC24ifHdqKhRpbRpQ8XaxAM2WNiCiSaxSbrdk2QzqfVKdS",
  "key34": "3GeRWkC2MTPLqtjuhws9ScnbJWEgPXD8Mwt3SbHSJQGy3nTTD1uNi5GY7LEExXM5UZMSdDRHee96npQVdhGFNX8p",
  "key35": "veesCTHDHy55XwrzFaCpEyeRGdzB9r18NwmM6EH8Bx9xmoR8cuQpg2TZrLNwrvaTTNPYrAanAjhamvQG2GTPanA",
  "key36": "3k3eRTDxuLowBieMge52k3EPtWD5gCsDpufpqwSEqoTvJsTrzzRLKUVPTmdD3NZyz8wzJ2AmtPKRsBhzd3J2wff3",
  "key37": "4GdRgC6tLsZJj2c2xXNXLznMt7snmSpeKTdo3m36kCDKfVcoghoQjfnzdFVNKHGGcNhZkgfQ9VBH6KFFeVJJE69F",
  "key38": "2grmeSdKo9M6dPPc7ZV17xTva39u78bxmZV4znAG53fmdHdSJrJSuzepcPYDW4g1B34n2noj9cnbpvcvwVVLQViS",
  "key39": "3pCUVWpBZQLzBeG6sxFsPY1XHD1bQfDd56yYMQieeQSseEBDYXZLUVVSaQLG4qgH2YbcFHhGDTjLMjCKtqMoQxd2",
  "key40": "59JQQ7gDyYsbZ13gRt8TT6TfV1z63ByPZyow3UVf5DTJq497YLbmo532QaatPo3CbevExmCkeaBJAZP5H7wsRCAM",
  "key41": "4U7Tzm9CVqhb4dLQkgn8GJnfroe1TYeGo8FuS9tKUgRUxeuKVW6bbVBF3o9xhHQjftZz8yU6v69mvHndSMoF5kEF",
  "key42": "2myHNfAQnRf9dv1BFKsjB6mGHeW4vfwy2jS9YMnguVJtDhTxRzH1Mtg73P1XDphrRfGEHqWvcRmk45BmyJu9whYn"
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
