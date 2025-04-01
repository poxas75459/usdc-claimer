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
    "4n3AA7hCrG9hYVSKzncDK1i6Fo9q5m8d8KDy7NeQdRWJgHdy9q3ihkn4wRbFDfHJ4Gf8fUtvGuN8HFxbwgrwLoSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VDM6RyX6YYTq25wLh64tiXo17bLbwc1wgJQfePm1kzT64FPbW4ENXpLykcW6uE4bcLqmib3HVRi4HSjsVYPJ5Hc",
  "key1": "2h6JnyNrwbMJ8YYYKyZgbAXvgvVugJpVF5dV2TKxafAokh8XVvAzrpxsY58xkbtdFjrPuHGqet2grWhBnPzLKm55",
  "key2": "2TUajwJn5Yu7eq6PRbMBDTngAq4d5mMVDtZzJ9YnhFrdzsVX6gqLr16zxCdTAnqTwtq1WGvbVCXdZaEmbys1rNCn",
  "key3": "dTWQpuC7iZeyej3rKguB4F4ZBHRxr1psty6y3f3N2UodSqN6D2Fi5JCPhUAKAwBXya4V67F89H3di29m5DEEoW8",
  "key4": "38p84nP3o1jMuibAdAMkbMo88zURSAuLvizTUTKmUCnwVFKjpeuw7pBfVnabeD5CkLKcAtgqjg7DFy9eiXGXBRmi",
  "key5": "2YtotsnV4UGz4cVEpXYsLTuCUKGtSc91RHa7M7FyYAzXFKv6XFQVkSQCd2jrQcCXt4hWka5twtGuexCGNxgoiTCU",
  "key6": "3Ke6DXcdWhYrV8Z7poYrCWwHTHw7H88jxGdg1oC171eRPBNA4kcKCDB8STmWVgzx6kApiJqUBJMd4JdGcWCqbzie",
  "key7": "5zAf6NQEQ6ZZiSnp7F55vqoS5coybLGLiQ9Rknn3v5Vc2hDebpA1ZoK8FtXZwmrKGphXwhBcdBY2ofG7QEqGrLzu",
  "key8": "2WaHGH65BLb9P24jKiHkDjtxxWdPRni2a9jvCw7JfGck5Hpk1edggNB9FBvFDov87nCXEiL34hDgWQGtrrGwiF8s",
  "key9": "3A2c58Sidb99XetAWjNSjZQujD1BqZnUJPXsDyB18xv2h3uvFfsMDrpBpuAa1DrHH3PuKfAgfTuxj8EmfmbGu9hg",
  "key10": "4RSkHCARYzrerKtofq4TMoWbJqEwk7rrzXXkz4cNseCgq86bRnDFCe6UhLPESv1mBHn9UGNuuM4bi9jkMoBVBn9E",
  "key11": "mnW5xFTv22GC5tZ4XBKm9JmVesGsA9iM9da6PJ3bjpfabSYiHb4UkqikExeUei69ZSNdJvMrMp33uDkvuPFjAdc",
  "key12": "63H8CJdNFnTQd9FVKeTpSNNs6RngDcQV7xovi2Xx17BdSPjP3FtsKuBZvvYeXhquHh7v9r1ERtb9aLvu7Zk7tDGD",
  "key13": "5YWzLQHPFn9hHP2d6t6aLQKDMLdQbDVpWX1sJgjohmsS3bTfSN3TEuRnkjpRkiwm1t4k8YaN2gexNThu8J3tBJxA",
  "key14": "PU5C3xX1jDPWULNz8sSnPGjxJksMzs1ViCMVat6Ts6vzsTUmVpFWR34pp6HC54xpoJLYVUdE6p7pX9MLzUPyPuZ",
  "key15": "3Ewniv7C4Rp4DiLdM8p7gSVmCHrRayt5Q2BPE7uiKrYT5JTsF1C8GAyu9CupDQhiKXbTr3J9gXsj5Ebk49mKBhVN",
  "key16": "522QqonkRvHuX1tFimaTMJKwC5KVdTgVn44ueVypPCWj18iu84JCsWSPUTarHMCesUsQB9xXxroLezgWh6woucdJ",
  "key17": "5Ap7qWeD67j3hBPjKMXpGCC399ydq9S6AWLjvVwTPHgZ9QP77xiDDT91tAZdEWWuHHjtmf483cCWeAKnqQjgy3q1",
  "key18": "3TNZ3F6vM3RPsCVpMC8qQG8ia6exnf3dNyQEMLtUnpAd6X61LyzVEZ2YTaaATHLBk7qVmv85K8oYgXkRSkkmcn4P",
  "key19": "3nkMH1AvCasY6mmCFVCPavoWMMQKz5E52J2Pw52iWbM3dBJUEib6UEgakcuq8aggHfhqXpeGDAE3YZRBpSSPEFMZ",
  "key20": "sLkxbduhhPekH8XFpqAVbG8CDdXZihpQKhWv5XWQvZigzYDBgwZ4QbDkC25y9Gvk42ivqxzEwTo3YNvKiaQHGY7",
  "key21": "2RN2WAqnDrycfv3b9u3vNqPx1byfLFjVJR7UaLcyLa1y7nWXYtFbL4F3Hda47ZUVuyJUmq62gMN2vg4JdVWiqbP7",
  "key22": "46QAWeJn3B4XuUyepNq4sJRc92vqTHcgWMG5A7gev4MoAWtRyhcUW6mXkbWzZE83Zb15mLCay8MABX8Zyv9JTJ83",
  "key23": "2mKnc89m9ej59T9cKg224tJTmJ8bx5uk5H5Bb6DsdURdiPVzHC3mY2XxDXoENLiAM6wzttoWR9G4FGs4PgBwdw7B",
  "key24": "2jKuoEQf7TAaRCtiPYV9fejk7mpzauoNsfUv1crmwu93cvf2qpGFKAVJph36Y6q9Aj8YdhnKQWTUhTikkKtAFzuS",
  "key25": "22YkREphW841YiePFVVP7n1tugaxXu6SnoK7mcKockttAS7Z1E9EdXVfPvThtM7UiwVYdbkBs6B1EizmKWqYGrFv",
  "key26": "2uMe6Z4m2NEVnRV5xQoujU5Kb3tSJPfbG9ZqBquC3KV8mVVbW2Pc76E5Po7PRcpz245nEfLYK26fy8NywgEh1Hui",
  "key27": "5o4bNXsAyuEQn7W64hdkLPazdh87mbsjxzd9Hb5tX9a7AYSqXhsVAtgMoyRVfq4jF2YdgnVjQtvenCCPHuSwfKss",
  "key28": "2kvurNBymqsd4uTThBJwCxjVz6E4hTsHsew27xpz9Pr63y5WxJWLr73UyQ4MA68mAzNontVhW1TybX9qJqMwdoRH",
  "key29": "61DmiRDsxR8trjjYjXYauLXb6oR5ZW5xuSxjyKX9Lnob5V47rV5RECshqR8WvF3JxisNjMF9RhdDE38XCy2zt8X",
  "key30": "5uUEqCTTxqUZ8ak12eQw38YQuhmifPkrhhvpnNDb21WsiRMDt8HRYEJHNiJ7yADEmZQUYxehV5ua94LPtbjMqM8E",
  "key31": "3CPygpRYyodcqYib9EDgQjSd7ziVtB2zVML1N7w3wgiKfqrqutP1SB3saC6sc71X4qdYmPemFRnFgzLVSATSBDqM",
  "key32": "5Ffg62WorLFEDPW1JeiryUh5PpXG341BXceLWBwsJvbGoKffDk7wsemRvcncSVF4AbPdUr9rUJJmiepotcEBf4VQ",
  "key33": "duSowJXqdvAXwyXYFc9w66M59sv2AVJUNc2vbjUS4CkFYphwWDbMRbqnf7YDiTf6EyfkJnPpScfHS6bbuVvAnH5",
  "key34": "2uVAHHgoKvTYKXAPvWNaGiwSwUVaip2xf9XsRE344dShSymYEBg5XyH8mK29SHPjTHfXCxDRgNUNPdyVVTWCYWby",
  "key35": "3U5YVpM8owYmmHR1AbPcMujZq4xk9x164va42LCEHM6TerXFyzgQmwBLMcmA7Gyqb9wRLLpwFzoSdda6kUBFskFn",
  "key36": "4Y39rLPvA4P7TR79H8owZ88BQXpq5iK8zQKgXXd7oa2zstuU8cfJjks79R1FEHdqzet9FyM413TFuihzDMJ6Fu4g",
  "key37": "5zP9Z7AoxoaFgACRV8Uv9QFZ2FkSiZxqz9is8wbcnn2UZpzE25cDZ7unvjGdAsPkNzBt7dSzW9sSFaFmvttcScKQ"
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
