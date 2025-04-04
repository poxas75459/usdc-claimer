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
    "2yHWJ4GXmKFmknRRxYTXV8ErpkcuTCj1PLDBqqDL2sFJ4b1JANdNq3VvjdnnyLwjWt5XKA3bQAhEGZbFriQcPnUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dyj6uoe7tPE2gkSymqzQ8ubvrvs6MDfmatAp2p7YjSeaHLyXPtgTbUMXbsy6RurTHjYqN2JY82FhW8QQTmBsuc2",
  "key1": "3bMNovPZT2itM9wKXZ1d7589U2cPXRE4s5TtToyUsVGqbkiCoPGcr2MDS1A3JvZoD51ypEphqB9WUc4Qgn6j4yEH",
  "key2": "3Kc95sW89FzwhP1wWt9BCoZ5m8E7c46HULG2qaBaAYMKPfgPsf7WQqoDJ79uJjB86vFbrPXHgBHMfNKiX6jA84AL",
  "key3": "3UryoLcRJ1t6TkWsLaBWtnMXGPtuAuknGtFWiHry9Lmwx1xuLAnB469W8wuB1Rtpdyx8uf6AuPAgSrMpnsbUqYpo",
  "key4": "DkinkMvrz7DxJkXoucHAwxrVco7yhSF9iKp8nWtyJgzs2zfc6gZhBPYjYr2ydh7qNybmXeF1XLHLTBQgwAabLLt",
  "key5": "5n3waTtUsPPBfdb4ArRYLuTtAD86zd8BYHcQxvin4RkF88B34hb5pLMSQTU5vsA7Wwr9ratrQowmU24eGpD1tiCD",
  "key6": "4H2ea7CEBhMbiPC7A2RdRXuS1mULrUkkKucCPmsVRidQ91BnEwtKwrCPy4TXFM34QUaNoqrNKWQ3pY2CXUgqihup",
  "key7": "3nrbJstKJXTFBF2GWriwYYucUgD9wfW34Yj2i29sbdksHjMdieJT7Fu9uBUgGJhRLfcC3PoSwT6zfHQhsJABaYgf",
  "key8": "46uzsJHMFWN77t64YF5YAEzYxkramQLLRHLu4rucUzbBtbg6Tv783mpXBcn8iMvNLNSkEjr2MLAFNZ3kZpnMyyod",
  "key9": "2EPq33aMHhuL1Z9MZkDxq5rpoLWyFVSRU8XAqprAgWBbx9DzYNuyvJ82nKCRSQg6c5111aumXc3HAGMbc5fUhzvr",
  "key10": "4NvidrQL4F6Y3MncPgC47mrkEdUf3JUnwPEpL2URbsMbDrFegkNX5N6JjBmqNUDPeXBN6p8nfYnzDbfAvqmMWkZy",
  "key11": "2Je9AcAcTLXn6SjTTgwshASEMAps7rFatSG1dQZ5jq62eMXPV4scmhs6sRDD3JcvXkNV3bLCBnRFmqTftTWYKZx4",
  "key12": "3yPrDWtwtV8fkJ9MxC5KZaaMPVLa6r6P7h5kQfJS6vnecDS5bB1sNYrnD36Z5udySYC5B833ypeEmh6Rrfjuvkyj",
  "key13": "ughHSJiQPkmT9Bvinasd7G3oiCvWf2fwj2GfKuHGeUDot6MJuDU515fAMyq56VTjddufnT12K9xfxWEJ8rkqXo1",
  "key14": "3sL6yV7iQmMVH8TGb5ScwaavkQE9YkLSVSNBfhZUyzCju6RUnK3Kz9QfuEdgFhdXU6yP1fWwVxPz8aMQLronMkcY",
  "key15": "3TCUibKxYnXayi4k67RtVoKJEBToW7EZiqNtrb7rwWKUPN4dAM3hEdjeZxFNPhEUmosA8hTF7pZa6XQHmitdFZ2W",
  "key16": "8X4D7k4cLYkKYHeMtY4GL7J5qwzu5VYjbPHg1dMJgvnaBuncdaF5gCeLBwn4BF4D1WfjHy7buV3RvVBqjL6C2Vn",
  "key17": "5MmJLoy64NpL1EqpJE3A8PCkQ8JwVmWeDwFm3Swx6ji1CgnWTjiYsVY7VmsLaK6MKtVVzJ6eo8DVeAZcj8htPyny",
  "key18": "2fsxK9tpEDXEU7dcFutYKWP7nezDpubfTTosnPc8ooKuyot1VUfqWjpzKypUeXSzi14gvALSak3isfaDU6MYd7pZ",
  "key19": "4FaF2QwXQg3nAEFg9SDZd1iGmBC842VFGgziHVLSBCEiR72Sni5EZWFXhRBjU7Qfeoq8ivDSpvFEvGMM99UVqGVZ",
  "key20": "3F2dWuFpeUCq8Kkh8mD3JHpXN6NppzRMKsaUUcniPVYoZ1PpMMAx5v8oH1Sgi7nYWYLZbuCvzVtBwoVac5rEYbAx",
  "key21": "36MxmY5MRGCYvVhsEKEhmXwAxJRS5jVn8UYTHEcRnB8hNkbKCbBfxB8rUX4Pf5mF1XQdi37We69maANPiigfKqVa",
  "key22": "imUnkwfyUKyb73ftbTVihEdAVLPMLXQamirgUHf2SxQL48St9Mtaqv6TvpQoVb6gWPZ94LvtLPfwNzK7zzfJTfv",
  "key23": "5q3Y6mSFL5rHHdRkNFroXW2KRGh9ZZ3YbCof6CVZyeNwCfBAzPrvQJti9iwVvp8TmQQ95f2kTWVmFanioR46C4Ze",
  "key24": "4e4yi55ZiG4iDACrujAcjcPCakTXBtGe3Eaqcdn5Hm46ZRfEF3NjxG8jVA5ywQzJdtsM5sFKkvQNqxxfEFNyDKxE",
  "key25": "2tA29eHsjiby9MLtJByrd8xfsR77QfNofdiEgkYgGUhkRxx13iRgPpxMrpspjeQwdmT7cQUDxzJJuXS95xhktH76",
  "key26": "3SeR386eHq3hYDuAWhMijehUCSWH38mrfjYBk3rT1tdXqE35Jytd5B6XcrvPDiBUuqf6xXRPQw2WA2pxdC47trXo",
  "key27": "5WXGKLS5uTYZfVHUfV3ty5b77s5M5uGfxDr2mxdaFQwR7L2pQW1tYBrtcQSUJrU343XicMHZPmByGD5HZG78uEGe",
  "key28": "LKyLaKXVQpEuKhke1eYi1XF2mgbbVUfz3wrFyoDS3Ug1QRifDE9uaQsrS1No5W7oW11REuSzVE4cjbMUNersLyJ",
  "key29": "4uxGaYtbfU2fEYk6cBsGfJCdYezkKpT4fuwz7n9ojLrcakXBR1gh9cj1f3akwSqaCSaxh6EadtKbswfex7oWyRGf",
  "key30": "3mCAG1oBcwTq5Vz33fpFd5ND7qD6wKZsRBkSHEpLduVquDyqHd2oUkVfNHZC8Zbdy8mzJFfBpm9EJqfhrwYQoARv",
  "key31": "5tMmu4tCxxBJdWExBvFFPBwx6Q67REuM3FXmBMiTfz8uxsVo2bJXcwsq4NyyBjaW74SotksGuacFNybWgwBd1RXt",
  "key32": "3ePLWxUqbqaCRqvFQufAJPQp9Zy7qeacKpfcpvF3Qowbib54va1s6VYDWePWT7xUVH3cc36D6xPBa76zeynpiU6j",
  "key33": "2WyzLBvZMghBKnmLC35AeVitCA9NoyU5LUMCdreddz9Wgj4z3P3QArSm7gxUTdE2bRV1WfUqxzfpN8fJ7CRi2AHn",
  "key34": "oPcsaozYpAGUPBNvF2zEFBgdRprf3T3BGRdFv4rkkzqnokWWbkdC5qi3FWCn1Jy272RXfCbQAng5KvYs954TB1j",
  "key35": "24PJA5BKgwbxWwzZb6yLsFvorcp8yHBsf3crWcgdAxfFuYEA67815TxNG9WFYwZSFAayDXxL2ouWybYpchjLshNp",
  "key36": "ADYnCM2m69u675qG8H1PVVdKKkpARgRzeXY3zmH7rYVejEHP4trArKgmDJU5CsLAHKgvHFAG5vbTUeHtqY8CdHi"
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
