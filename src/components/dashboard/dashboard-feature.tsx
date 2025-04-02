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
    "3iKHboAmJJ8YLS72Vzf5u52FtDWja5677jpnXFVY8atQn1kzKRBXpPykYRK2Do362agJbw1zaWmJVxEwhThNR2Gs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E94TAyCAiZizb4ytBSvyHJEPVje8v5BJHS3N2uP4KgP1PQJrFGb3hQekx9wVwqow7tFpgzdSnk5kmL3CKjwNNBd",
  "key1": "2rtdmnFrSYDszey8CdPPA5EAR5z9Gm9JyG681LAfgtpK6aJXbzASowtcvoMNcUP2SMkFJQtTR2AtHBpcefEV4i1Q",
  "key2": "d6cMuiAxp6KZ4RM4AUUdkezJX8xbJfRuvH5CYvNMqtnGDW2947B2vU7s6o5vjkfXosomNPpj3xUDC1jd9pERMpZ",
  "key3": "34U8k6foPsKMLBpkGJeDHp8jwDNhNUQPYX8fDDyAbPTNriVZXzCgaQH25o6j48k46831rQBbzVcqau9ec3PVHjzt",
  "key4": "3vAW5ikAo4YizneRz1nsktJs27hcktcdPP59SZj5tQE327beiQjshYGb74nKz59Rn4bBUnzRqYGhuwgCHhGDTct8",
  "key5": "5wj2Vs3B8MceRmkgVMRW3fWL6WFeu4aKio7DKURNaKYsr7oDnNjVazxqpY2urAthNqs6XzdYKp431PVdkSRQcSxY",
  "key6": "8nusmE7WF2Jw9xD6rQvkGET967XC5hTjjUN5CxhpFd44VGHkCbZGUukQkRCYZ92H4kfAdPzr3NB241z39HJ5ejk",
  "key7": "FNHYD1GDLFAzSns2zpbfjP3nqg1HzmX53zVxU9UzKTEsKwgjXfuADeJjVbgB1aBng3YaiS7s7S5Kcpt722gswru",
  "key8": "dqfsu9AKeP4KhxmbFPSBPShwywwwCdoZkhFG4t2RsbUkkKaiZZqPeHF8YBf4f6GYCMqNv1vcVKXCnyaXo2Ttdst",
  "key9": "63idnqGje4qzTAZVqzRjHJRYTeMW1nYKgqYiPhy8n4ngASC1KBt5KkaGQsqjHXWp1tmASGLQNerHTW4C1TYzgxUf",
  "key10": "5XhqkFxnzaV6vFRLuaP6P3tUwkgAsjmqhQr7epnf9hVYsNcZ71mFTSpmj9RdCLQHaYmsxzbbufFM44C5XBKuQHip",
  "key11": "2jMGZRs3pTdraG78ZSSxrMypxCy9ZAh1pds31j1xHHVixEYWabCZv2njGFBhHRPkJM38UHReAkB1Tv3g2Vw7meCq",
  "key12": "3RsX8LbqoD9RNbHwFrvUgF97GQ78tfgHLpDQEfNYvRc3KZijRCjnbdhx3zugiSkMX6CG32SvbXYubHbmUPuW5ugj",
  "key13": "3GE6zK4iAeLizBLpppeYrxZAQpDvFyiF49GRQAXr8oUYBhqNZ5xuLnNMsvbCkkUNwsnNKirbtMXbWm3JQrXpLmua",
  "key14": "4YYM2aQt38fc6smReP1mbR7CbNUzpsyTo1rHZehuaW47t4ZVc8M74LA6fomPav6Xi2eR5De3FU7xJcSscpc6hfwm",
  "key15": "631iiYbDto2ULzky64PmeWEfmFboknASQcScVoGXmAUDkU7WGhNsw5rNEapYdVKzN8UXg12krogzqDvMK8ciCKtR",
  "key16": "274UfSSoWWYAs1vfnkrXoWV9Wm5DwATXfi3JNFR7HGnjQgwrN8q3E655X4pNY7g3DUg3RCYBZgtRAYpdeJ5xiFPg",
  "key17": "4qYnYRj5QEREmur4mXFHLHu3nhW6K2mvkNAB237Hsu9GhHZB3mhrKvu8NiyB6PpakNBXAwk23NWbwdvzWzPktEGc",
  "key18": "MSTs7KQZuK6bZZFLsDxCF2zRJSZZi9CrhA7azCi6n1r7kTt3QwfMkdiwv1ZmfdWmWStpk4gKJ7q2FWat73SsrvW",
  "key19": "51NXHqAtuvaQa3nzQJyf9mNP6xmyNQuqhJejN6cK3f2sFFbrmtQGXd6WtAXF8ACmg1UtHJMWTMuE9Z2Qm9nfUw7b",
  "key20": "64USVSueBQvkA1sS92QPEYqKfxgn5pxEXPKCtNHfRd3f1UcWXDJ7RHcsMeM8KFQ8yVZQyfZhSJzNMjqZGPm4G9BQ",
  "key21": "3obWMpqskNHuMaMCM39aBGgzr7q2Ys2Ha4A7rA1zmyxV2e8PJpz52Vvjzh7uwWQERJ2dHXneqr334S2R4J83KcbZ",
  "key22": "3ZihjLzMWpcivkqpMsQxxC4aKjoYpqUM4auegvu5xNPyR3qu3neSbmQai36Ca5VWAGfmULLEWjXEHaeY79d3mL7D",
  "key23": "RzdzoLsYiKwkjVeQf3ZCza5NXrDrVvuKXd31XN5KiWTHYm2ACXytnJJzotXCS915UGPNRvdDHRQCVN9Ko2kf3AG",
  "key24": "3E4f8F1cVDG1ru3mkeVmvu6gc2DjoKhtFNSvUf9CAPhbzxoZTSx14jA44zyCRPtDeihfw5AZyNVB2jsywv9W6QY6",
  "key25": "2C5L5d6QHZGSqLP4HLbkFXnYTeNC6nH2ZAKr8HQuqcjRvchQV9VmQwWdr4hqFfGXX2YFodDuzNBgeFv4iBA9k76E",
  "key26": "4s9N1Apjs6br3DiqxZDJcr4bLyPKv7nBWAUt8KVq3yJyMw3UY3BC3WHoiiD6dbAyp6CpofYVZnRHVbf2Zp4QMhG2",
  "key27": "4j261Tbb14tWY7TnAJeanZxLZRgDxEBBc2m65reSNXK6kfLBVDhHZEnrmZ9M8PstMfSfGmqnrVAqPkdWDYWbvLS5",
  "key28": "4ko1tgtHgkWm5bY6qDKmno5VuNCghJcmi5og56LTRA9jJRckVmTiU8YZLkoxENjRMPLgyoAodnfz2ubACKDUYGqf",
  "key29": "3aGeQq43nRvdtduD6Mah2tBbEodqD13nXjhgm2vjH7EMo89GqBBb2tdqnLGLRVXa8vdv23t1zoDPCzbeTqU1c1RQ",
  "key30": "3AqH81U9MTvLZenruFhK42oAArpzs3pRZnATXwtUuUfvudxwas5HDoHj5uV5An34i2eaCcigau1kSmaFDynvSV1j",
  "key31": "xynqFfDpQs6EYCHr2SRPUa9kBdGMD4RT5Lb13GwjR7s5sLUAGfeaK6wQWZ2WXEV3WbdgwSWJZDS1NeNU6PjCWwq",
  "key32": "ZupBK92J6DbirWNs48Hz2eioxAU9ps7BBUnpRhaS3zmmV4oQwaHSH8cmxFn3mztJZnYpgvpdHSNWVFerv4reyxf",
  "key33": "2t3RYQHbQkbwogujurfDH5M1uhkWiMc3LWjRgaPSiXSTHo9FMz8LjVNM3oqHe8qhkQ7F9vU3gYAMingzrLa5eomE",
  "key34": "2eJhH9cvJWP5YuF3ND6TEQjiPnXsFK4jDx77WX8acm4LrqNZBFdSJ94GiKz9brksGCWTS2GQd1wdKHQ6ZDSSpKUh",
  "key35": "3ud9XaKHiKeg6Q6R7Z19F7smiVZx3Q269p4XTiYRcWoum3wqX7YkXd5cyXtBQKDZmTDvuTGXEZVxW9D4Jz2YeFey",
  "key36": "2sr2vj6fJeFrQqGJNXVGn3YeaPcwAhcTLTPNJW79XynZnGLzL7jmTBGxmaDT8tXKkeEZXQSKu3XfKXvBgqjPXVXe",
  "key37": "7Qcd4KwYoNbzs6gaFSkLBs9a52QcfJNNJxhGej9VkyRdP5sR8NTJukxLUScLpkgrNqUYrfnY2XLyJgHjRxub4Z7",
  "key38": "3QCBxJDumUwkjxFmNtAGJxPVFjp4tvY1NDesodUXHEjEt4Qy3jSAxAeX1mD1EnecBf89v8FtqJkcA43ZUPPhzbwB",
  "key39": "4Sm9JoecSX6MiSy4ToSeMcjCBxCTRYTt9N4Larq7YRMztNGbdi7CEXubrARkdpHfq2KXoeYXWUBuuW8xdwKddtpb",
  "key40": "e7zizMn8m7W51GMBaxa4bnq7p3caEt5nWTLguBDynxQNKEZmFRC2tpfDUX12GKUNniZU6B1K2Tf1YJzxraVyCzy",
  "key41": "XECbxunJ81oKLE1ETw4oJgGEC5xwSUDN1i9x9AwDJx86G5fQJ6WSJkimeqLdohAy5GDGtjhpjnLwi2e9MZ69Nm6",
  "key42": "2xZ2WyFctPRrBrEmonGvKXGyFkJwti1RN8UZfp8rVqHZUwwVxFpg9Dqb2wfqm3fnpSbpb1mh3zVZwqgsokFT2S7M",
  "key43": "5S43VZhdqpFfNMhfeQskQjvt3h8Lam3KidHwUgTANdbXdfQwHhT6du1TvrZramdVLfacMNKz7DsLmGwUdrLissMp",
  "key44": "33boW7iMQjRS77rYzd6YNAKtxM7eXDDLiqjggx117fRrLER9jyxfnney1NaDihMwzCPMHss9D9N9tBVqZPzYGkMn",
  "key45": "3pAQMUgZWnUtZn5hULFSxNuKQ9qRXAdtx8rUssyGxn1xpwBQDMjLiCXaAieBUkbf5ANoBrvraTK7qyFGihgFYM65",
  "key46": "RFCMLM4MM66wtYLN2yDwPdQp3Wj9xcqzdmtcNjinvLQVFVjbNdYJk9MVvzhKmbszh5f2bECrHBuUFe4mX1Ebp11",
  "key47": "3RCgpRYJEx27chACDbvXw8Fzs3EgdJc1rVBZi1H3QXT48W7nXBZwahY78zFD2umtuWySX8JzWH1vYEicHbtkcpTr",
  "key48": "5goUGXJth79Ff8KeyL1uZVukpdFNV5Ttvr9PQwp9w3oBPinHn8vrS4hAipBuP2fg87crXHJXidGyU6uo32cCRi8v"
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
