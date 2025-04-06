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
    "3QXTUW1RbX1uxEqTRjR6L4bPdx3o5L4LUvWAvtAEdZNyJnWCXnMeDbLkaKTnna8dwsKREHxfyHJ8ppjgaYoK2ZCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57rZYXmds8W3zGzxdFz3Nj2RV9AwxGNCjrfvwswdVA9F3ck4QsmnPCA1p9XfdQ7sHTXhWwk6Nmkqkzi2zQdgJ3Rg",
  "key1": "21fqbHyqEPnHm4R3gfjD6dNqnZSBGZNVDn61X9NjypVskXaBQzV5umGtWNQ7MHyZZ7z5dianqjdcpXEFH589PvyN",
  "key2": "3ERk3heZz4BKWH1wR1LWXy8GBZ3idfJZhz12KUJiE4hKrK9nEBE2sjSCS7KKE3ged7nncLe948TwTyYXbyM5gwvT",
  "key3": "4H4YpqBYZZrXEPeshY83SifJYqzLJjebJoZAzwwGEYojvsKJi6cfUbgmWsrBAbT6GEHapbswPWzKQaRPJohRXnmu",
  "key4": "3UD2ftNVj1s2oBufZ3DUXnWcit6VEya8xUNoGSJkdPhQe77wtG4YRnN917vuqYrzHsUjz6ChiLd8Js5cxGQfeqKs",
  "key5": "4pbsHKEG9HiXMehXSUV2mokYmt5MrFUH3x5PTzwJ3H5pH8bLXpzTJTjXXtoCSmUXDVSkkTruaK3eE56L3usdtiHy",
  "key6": "3ym1M2vDNLAnjkZoyTjqPshY3ijyKBFTb7r1dtQaDmQNDjFQV3R9JRSENvFXc9t7HYN7RaeqaG8qjKqWJfTWuuFR",
  "key7": "4dKojrEdjWAYpwcME8EMMj1wMShRu5ryCypqmSphtuLT2EtC6gZe7FfesHS1LKu6NvrJBNk9mVjf9kddFEXRXE9z",
  "key8": "5u6KzcdFvf1kABjSftQr9AHiUS5uS3b9ZFqeoVfvbgBUesRbP5Yg9gLwYBhgrZhfdV5xUQGmwyt1tPnsp49oVLUD",
  "key9": "KQdYDUuepA28e67uhcNtD2ZD5DhNqoVjDW8rcxXWqkMCm25DvMgDRc1HuPCX5b6rtbi1RBuQFhBh99QFxsai7LS",
  "key10": "2DviDXf5uk3aDs3T3zTyGCVJK4dpojW29CQUrjZTY9h9UR55gGEmibjJ5oJreCVf4PenXN9J2CYXViabXoMb8sRQ",
  "key11": "2zpbwitvAaeAeVXZU64XHd8xaG6acXjyN1Mq9aUcZwCHvAE4wNrDpXHE3eBLaFRZQQW9P9rmZKxScTMtDqhothLY",
  "key12": "3r9ZjaEUdjJKHjv7KjLpqZSCX7Vx49k4SXHZkYYLaorSjxJBLALy8cJBx8PdCivkdtTRTrCeCFVDuHrAGDVMPX9q",
  "key13": "5aZVJftXxDqxkyoVQUxu2iKuNHdi9Hyn4eCxqPaCod3pxYM5Gor3dxWs14nJJBPdpafpSu4GKcsJ5YWFnKVkr7CW",
  "key14": "2HnxookwwmaUT7hd3mvsKgJW8Vg1JyYd5h965EqWH3HaHPbLL3K3PbHCbdckAH1wLQqzPrWQCAYJDWafKL2CWcpU",
  "key15": "2jHD2htkKZkTde9XmJR3qTLmbuQqVbM5SxAeZ2nFo74yNJTrikH3Rk93X9PqaxYn8brLki73XyaY25yxsAGRAjSa",
  "key16": "29QuazmpGWpaHCYCKM7nz3Mnq1NPWMdWmjwA8q8FTCBRX6uBV4sNC1T8u9NZGdX9U5UfvcpnM91Veun6phx8XZJt",
  "key17": "53wx9MUt5CaWV7zbLYDKn3pxqZCybEQtLVPNdRkCmPXwgLjKMD6Jn6Mn9M4aUBNAVFPmTvwFFLUypB1Xmezju9xe",
  "key18": "2G8eRrBTTWCrjVN6rmPWCCqbYyxieRcNdziWydtMfMANrPXYva6B9TMcgmMSvEDn1T99vWprBkG1UB3Yrmq2Qnmz",
  "key19": "3M5gjSqAfpKoLxJiBrGGUs48o1zm33YnBA3qGghJcdPR4yrTcSbgp9DGzjv4MnaLYLC5vLb3gkYtAxunCkJKAyv",
  "key20": "2FcBKX8UoPUuaVuhSW3A9WL1RHLCMAmjESqjc6JGtyUq9zXj4dMWTyuHS3ZUWJGxxmxvmN7FLFocneHyGkn6M8FE",
  "key21": "2de3R8ThqaLAd1SENC8RmUR54UDiiHgzbaGr9XfR6DNbFNjrPVpFqN6eyaDakbYJwhXmzThHQcfBRBs1knMemNvy",
  "key22": "3PUtvuwqrV1AxXvoMKXZXpUdo5Z2beVd6443WhbebcoA99qL2uvFVWwoVx7D4UeMCgzPqmMDcsBfXtrysb8hno1Y",
  "key23": "4ALx79ojpkZbmxZepH7uAo2skKEsELw96mRVLHpaTNuF6cR7c974jUyjXtQKw8ravYut3JgCGZZdYGaXWwXMbKdU",
  "key24": "5iaP7RZaYLQc94GJKHyno15gL57PjgKaUWSxygy4RRnaCRNBpWWywQ3p2ZuJ98MceLJXippwVe45LgmJ62jU4pUt",
  "key25": "yYrMZe48jeKbhaotd3HRSR9gZcP3TDZRUWauqihUZRNcgNkpn1g3vxzPvrG9Q3k3EXzNSBXp4PffXzb1mtpcPR3",
  "key26": "sKeqmicwu7jVuy6q9My6EejkxcZH2MWXqpXVfunttBVYBV2oVmL5bDn7pYtbz7YUQPkPAa2ohDNzkNYTCXMHeFA",
  "key27": "5duKcCHDjusP2RbLf9o4A8NEcLmb77T6TrTRHwT4gP7qibprn5vqGZeUbZKi3ig3WLcNFRcvH5w9fcHjjbsj4NSt",
  "key28": "4hxcWhzJHSkqBs3xiZX7qGncCmaFa8J2yBzcNd5AqYdQDWLFj6dkjEoopfVT5j7efs5bQXNL3Ddpe4619LwE7q9h",
  "key29": "4bgfwRoCw9dm2Q4f7Mthh1kKQK9CFRcaRhJeg85pJSDhq5G6xD4hD1G66LsLBDVGmJKdMWay9zsJ248ZKYQA4Cc5",
  "key30": "5ZvG1WxBGWLne1A6576gDhQjofj478f2hNPgS6zp7niRKQWp39iQA24fhdE24X8Apo1xp8fnJTg65eWwTVuZZx4S",
  "key31": "4wvsViWKzetEdVzXWCKkvSzExmXciFi7vKegDVk3UmqWRmbRWDizECNk4r3mDi2tWH5AMDhPKUNyJ371JbukegLy",
  "key32": "4tGMc1bxj2hzwGktnE67E1ZkYzZqPx2CGKHy3fZt5PYUeo9yQmjCLjkp8vGTAh61gBmxWX16cbaLExcTGmPdGnFt",
  "key33": "3o5Db9ntZ5qywwKMNE9EjKMGYVjvnncj2NEyRdfUUQuaqdZF5fG6gNaZYo5uPN6nL3faXbMquHp63DWjtbuAtXAh",
  "key34": "4FmiY2eriHTR5fH6EDo748DZ561JwqDeuHKWS9s2o5apveBtWbe7DaELFwJ8FVupp3SUn8jy68ufRCf9utFs6yGJ",
  "key35": "A7FSpMACaz4K1HunXTvskXhSu9fhL6UJguu7pogvDKfyjwmiXa3VTcgZrS9iGYt4xPkA5B2FyyCFkqdjj8npK7g",
  "key36": "37YezGnn7JMDgtKzozKRihNJU1L2DZfDE8A8Y6xgf2uFwZUHZc3MQh53rcg6x6WwBgEbD2ELyaDw7bjsYDQo7jtK",
  "key37": "3pdzbSYbS6TefmoifPSeBwzamRy8FUSfv2R5vFLmDx8S8BCFfwxBjEtiDqw4cWriHMFKXBNb9bTB1C6oC9pofev5",
  "key38": "5MdStJmUEDkqUQaH7DhRgpT3TyXweUb2swHheJpaGSvtjFvEGADhFMZwgiMSydsB25n81eq9pjMrkEoe3Mp328Xo",
  "key39": "53Ubvrg1cgr7NvZdK6WMnyhwr8BVJrj4cE2cajaNa7FKG6qy8gcT94qYAxpsyXKPLtBi1RPKmBcwVkwoCF1BkVJb",
  "key40": "3ndCkRhwQwxWWnZf2cmKQgYZKa4PTjKxURopdm6qP35r5awx2WrFGhz7sUWRCSqV8MppKtwnhHr11cuH24xviuwT",
  "key41": "623JFLvJxBPwWT15L4VosDbjyh2foqeAJZcEuvBmPfWeDc1E2g6ChGDjaY4ovWs2TtAcwbLg43fBQ2WapkY7ARE9",
  "key42": "5Gpvua4gGcUqoJWHUt3nbk5QAcKAumsYXi1bpqp995fAZ28WczTMn6GxVnZtRe2MwNBv4S4gd1paMGqdN2jmDfs1",
  "key43": "2PemEnzLoSsW9QpUQjjfdzr1PBuhLGnkyxJNr8pfoYbDkkJ25h1zMx3nseFDVecB41SnmDvbkN3Nks3sVpV61M2Z",
  "key44": "4m3Bj6AsJJQopP4ChgjccrgwQv8JQY4vve4yW3qwLhxnLh2XdG7Sec3xodUrZzdLjHqhL4hJqdobu8iyaV6Y2cp2",
  "key45": "4c7uc7CripvbZ4c8PBV29Asia9tq1eKjaBgLVqJDmR9CHEfs119b7cvyoB7s1fTyVpAzWB4Dnes79qT8jAZpLAM3",
  "key46": "3HfLx9UkXWn7akQuYyPbHeYTNiYYDL3LMdxSm4nLEpskd9mwEbgkybTkKVarPw42XHKQVTjyRxHCTrcbnJYroAm",
  "key47": "3qw7MgZ3qivcgHd3TFT8omWjRiurTRfAELT18YDNm9iEspwZj1r3QFcUgYYPHF3UxL2WxnumWpjfVBbNhdZMTs38"
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
