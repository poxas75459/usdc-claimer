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
    "5DDwm9HLL4apvkJhiZg8xB9C6KFm5DbBPGu57eSS91iAHkSHUXdB48oWCow9msLQUwA7LJEoE7cwKTqWR6tJfBGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nVCycLaBkAjCHJzLEwEMJtGvp4FZVc3mNFDBGTVv5xMFUPBKcQrTnvm7L7Qnw4HEcsseFxtPuTVtqbfYJhbLXeB",
  "key1": "QfLuEUi2rg6Hwrjh4CKGBRZesWqWE9q5CnjLSLBjYxtkz7zumL6bV9NVs3b7d3oooivScdNAUjHEgXdyYCZtasL",
  "key2": "2Dd91rwQuMg3Ck362HgJ7Z4FFBTA1A5PXmGmQ5ZTUfNj8ePKnTj9VJKtk4A2XvmEKxH1GzEPEVbj6jpLWZ3w3T1R",
  "key3": "4fE2nRxh99PtDUwpbmGHdCQnXDXQZGDHmmW8osbP3BcMUh6DKCbrHhAoDxsTpPxdpXscYzBsQQkkr9X27DzVQXYj",
  "key4": "6oVv43W1tpUNiruii4cAyh3eqQVN82TdarNA8eVJVMrExpuxUJFir1dxvXokGvRNVwv9qbWGoovSxJmUA8gPQRt",
  "key5": "5zBGtgpQxnEvo79hi9SfwjMRfXeU7LMT4kJmnA11nmr4MQ6RNxDY9VLnFxM9afR6Ku8XP3xPwP3QqURCsvGTy5ae",
  "key6": "1yTCyzxakmJLEmgnP3SV9DtVJMtoZB4SmnGRvQd7hWmJA1XoKJJPg54FSmZraPcqBkCC57pDtGbRZApRtfyo91J",
  "key7": "24VfdigoEJ69DD3E9KjSuY2REAh4w2eP8G6HTN85P6MCe9CHHZWRKfvP7irT3DdMTYouWArEEhibzZnpwn4Mo8wD",
  "key8": "gcgq7TH6E6TTrnVfiE8wWqiiRa1N2tHyWnVRKj8NgTBmUv33o7QSoFbprMMmFB58VX1fSSeyi9KmXmpZfDD2BrY",
  "key9": "BHjU6eUNhYBnZaAGLc9ZjrvE4nBUkJY7xEvR5M7jGiwC7GZeNtHv72rVgJN83oACHToSCG6UG4PzSvsXLfidWwY",
  "key10": "3Xppa15zQBZfPuMjSNayRuWQ4ocLyLAvDAFqCWZgRBUSrcAV5xp7eDBvdV1YVodVLKWByrRmU3DwTGJ6EdmEDVet",
  "key11": "3kzEcF4T5ELetyVCCEZPr3ssusQzjQtuNNQfvQ8mvfZoHurBQBjG1yJvgfiyngXTcb7dijzMHGsyskkU5UFAmLek",
  "key12": "2qRwGU1BfWNK8vuGRSt6U8bpeR2WyQNwD7ox8HZdciy4e2hYp4xcCAGdDmwgosT5QKWP5RdhRcMqtsZyzpQGHRcY",
  "key13": "2aw1fhq2TK5xz4Fb6sFe2xgYgR8q69xbfsqd9Jp4YDXypEpW2nLiQkZnQCEfExf3Z1Lv1T5M2k6m8uSu1GV2j9ao",
  "key14": "1ugshtmxi6BrHMGZrz4ez7vxGTX3yZvaunVAe3ee53xnj7uy6abhRSyS6jomGdhvwr5NL8mw1NhLb4sdqP35nSp",
  "key15": "5RWKj1xZTYBNbFruJtP3GTnCPWQNw9tzmWPar16yo64b49tk48QcGH91Lm8wBXfuMQ7Pj7SgQQD842cYNwa1Uefv",
  "key16": "5kQQWcuEZzkm57mmAMbponjssshLVyTQzqeyXyvmEh87XSg8Ci7dpkeCqnr3HUmEcLayUGB4Khm3bDT7ZuGigNkA",
  "key17": "5BwR4pwStvyztAMopGwUa5o3C6fQRR5ESNhTWcsd4n9tkKViGGqLfHhKNzZeCeGApTRKivWk81kMh1zx5wc2A78C",
  "key18": "a2uvBn5wjusooWLZ7Q6RTw2WBgCqTJsXAXPEBXYLLgWx9mRzhDdy1BbSCE4by8P1axxaTkSUT7HvseNMxbpQT95",
  "key19": "2ZzHk2nMUawUJRyCrAKGbDkWBdwj4KeN6Q3okbYE6Biwai9nkkUpGS6J3KR6WsVpWQ9NQQzcwSUeF4JcMuzAeTrC",
  "key20": "2ko5ScB13V5BbS3QN4Zp2W6KoUd4WxdhoY9ULYgc1Ue7MRWpaWzPN6oV9MWGQBKsyNs6LaoENPqsyTWgJ6mnFBRd",
  "key21": "TntuDhJNUvbd9gaDuLchCFA15NinjewKPCBWyxcNXUGmz3DXuABWPzpRAzqQXCa4hbP6sTNkAFtUdwxZuBgAi3C",
  "key22": "2SkXJfzQyznYrjAeyPgCFUCMPXQJ5ppFNwRETMUjoGhAX6SABHAc7i4wd1xhq84J4JrP5DeYvcA5sGp5PwbqAEof",
  "key23": "5mV7mWA66MRCbsK2KpJTevDu6ZzgLvaifH6ZY4FoK8yLAC8nw9KVAEQ6daqC1aFzBNJs32QMifSA4miSkKwcLpo9",
  "key24": "61MzbcMbkMPRgBx9tpM7Jb4Waoh3D3DTUmNWVqj4x8czFq2HWKX4tDnLTWJKoiT6xDbE3M2eeJx7oXQ296qhDpkj",
  "key25": "DJ6wRnJCD6UXLpeKGLok1BYiSQ85jHayKbttBcUNM8RwAVWSSBthKHFtise655gG9Qvw9VcUquGC3qWzLjn97AZ",
  "key26": "5MaFzeR8smvSyfBf8Ad5ufLVTbF7bfrpHrpqz2VV8rjodeQQXf5BzNcNE63QyR2Wi1qNLGxKsBhQz2rSghLsTF9i",
  "key27": "2nVpZPXdhx34HSEyfDybUQAbd9LihqvBysmmsmBrTKHppShhLieuCAvuoLqNJhx79wHQ7qSxKhPfG8o4ocY5wKuV",
  "key28": "WCr69TQiAZEcC6Giu1aGurTk7fzjow93ExCJMu19JEKuYstPshQ6WVCEueWefjXiKhuyVj879KD1yMzGrbVJKxx",
  "key29": "wSWPuyfpq92yj5MrnxGUdNPhY2CJxvPN71aJBcFYQ8qdSpNbRf3qkYaJSRmH8qA2bddCPPE9uMaRjqV8CMXB8B3",
  "key30": "37qaq7sPwFZKbbjEwRHoFVM7AfCDDSVLZQf3DdidmQsPzAmydRM4zqRTRqHz9yjxTBaVppMF4RyfQxo4xmG5ui9x",
  "key31": "3kDhpQjLFatGtFcU4wPitUctnRDx9bZGDYZvWdNarHpBEAkueBK3NqZPASjHQJVfFMr8VTYSvyGCaQFfF8bh2gKw",
  "key32": "9CMKAyscYdZT4SrmwTPGa3FWR4k2rizvGvMoQfJt7AGafv6hhWtS4UDoYZ8YC9VAJDbcaonskUoSFXGifrmtpSe",
  "key33": "5TrvhWPcwGHx4eG4hwXqfEfp37DwFrGnzA8dXGn6Hc3ZxN9jYa9R7XAB3bMoA7zdKhEQwUvAobBkwN5aJjjwhcHF",
  "key34": "cZdfLGmh2AMv2peRrzttzNvg9t8iuoBcSn3MKT7eU884iFMRtfjWU3nFG4J5F1PVZECwYw3qbU3TnAGKSAWMVpq",
  "key35": "3KSoHgvVKkqiY4mDHjkocTx5PRqvX5rTmnbQvDjHeodSkLXfA89uuLdmBoXkoFkxGmwXZ8c2iuza8aRkm1peSSvZ",
  "key36": "3yWLgYyzVGynniER6e4J4GKNUWRE2mqUzgWRo6HcEmVphMtpkByWr1UF3uzp1xSjqEaWAnpJjcZwW9XUiM3w55wC",
  "key37": "4vrvXZ2J45VQMP1KbqnZkuoAfT2JhpRCxvmu5VCCz2B5iY9W2NSvUa69MhLG4ZNujsAEDKcyjTaURC8bJ7FfvrRH",
  "key38": "2aNDJdEabeFCxRrSaDEnoJWsabszqxunseUZB2M4BTKAwE1aX3Xea2apaBXCpwcdbYbzgqoPr7ghstrEYGCp9mBy",
  "key39": "5853BuumSuKG3R4oi6yJGnFZZZCnm8DCxwYydLW9pHuf9JbMS2efon1dxpPzNN8C2Xus3HSpSk5mHXYfHViiiU3q",
  "key40": "ZNVWwPXvVsHJ9Up8PFYYVRFQs2t6sTnouy8gaKQr7aYzZXboBoGvSM97FZAeNVUogfSxc4iTzEoypUpXeAypRZs",
  "key41": "s4PgFRK7nRfMMn158LHVacEMZ1krSEGFfhwWDCKVYgPnz2A6YYV6hR8Bk3Vbxy2Ncar9zKirmBcoL3trMmrvmsx",
  "key42": "wCYAu2vbTkTE2WRMHzD39BEhwUX5KAGGaFU7Nqp2Vdis1BDijkddkGWQEYyCmyYmjZRxKknoqRDZoKz99Dboo5Q"
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
