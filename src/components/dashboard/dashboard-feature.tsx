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
    "3DWQTDRiF2bopAw2A1i1MNjqDLigbTea42ppGr9NNnBSYoEsJwUwtkUd5skx1P7BpEEUJj4NeYZrGUHWWMJqgRCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bwgBT6AjUmHyGHSY4SMZgxLHmTFGKSsij1foK9CUTnyGP8ngJvSEgU9DLWAQmqFT2TqkDgfG4nZbkRghFRHzf3D",
  "key1": "5rB7eEnAfpknqYESHKt6XHToYw1kLZDnrdHKdkb1beVpbahd3r6jKVFkGiXzsrttawK3CL1nmExUWT9UoQUNNHU4",
  "key2": "4szka5iYb8Md4bqEwUDQxykGVoAAtypHBVHdRGmW9Wq8srFjS1kXT7pgsUTQ1fW3qrTNtzTwCCtCBGPQ7UfqF8kw",
  "key3": "3oEort1K2jjpRcW5fhpd5D8kDPu2A3AVSeSB9V4y79eVYwicYGDswEN1oNvTjs9vgy1J5ihjkyS39H2ZMj7tbBZt",
  "key4": "2jvTgc9KZ8P14fbzJ2wKgfoYwoUMJQzcnfvV1yXkC7qUrmYcMJ4G2NL3H6fmLjDRKVMUEfCKqjS5wHcGEggEnvNq",
  "key5": "2pZ2PnijeQYxzyXJcMUqQXi3V6uMe46jB6cqqBBEFaTRqHbi7XktA4VbD15xYRmZH53ggaoFqSGB7oPuPBuFRrEa",
  "key6": "4ZNaGA4M2KnifX8SKfqxH6TmMHfCfcGUzYZDQrXMEYkrYj1EPShBvXdBtcYibnyFRXWN3FvmYaxC1iDQXhqAFrDR",
  "key7": "4JgnXWeCKoy64fFAgtMteVCQxwmkYUSDkky5Q4a91M6WD168HtV6mL8wnv4nWUTtEQ2Na3p2rxnuYMoJZFmB2VpK",
  "key8": "3NW3Ybk8v3aJ51JSGmAwj4qpgAwXSHBpwgAUY8euJEsnPfPQ8qtTiEAd9Bpy1Y7GFEeqHK7qE7GFaRBJX65pXzGU",
  "key9": "4WFzzQeyC6gpeQLG3442Aorpa7ngnbBE3vv3U7tREqWQwyVJ3PF1Sy2rum5P7HJBM4hjjMpqkZxVGg1QZ8PH6XCD",
  "key10": "4Nt2aauU4SW4EsU4dMAGQi7nH8CYcRojpDTBrcGisZrHx2pv7msQcpbvqbZ3oW34j5uLEhNsZp8A6gs5cQ7n4vpe",
  "key11": "5dFnoZsPa7g6VT2J2ief83WNsZqcJKtRYtfYq5Kev3m9acByvDBMjovBRNkopmE1zp7fxU7G9PnHvpxP7oWyumga",
  "key12": "2sGkUgo2HrbgUph2RwtBteihmQCtt1fMcy6oUYMn3kd9UjBwhCX8w8WFEsU7KSkdf8VPph19diukzxCZRD5iamiv",
  "key13": "32pup5pq5N8dCUMbAQXYe1584oEnY7UuGQRJJLpB69SfMYi73gjFeDP8roDzezJFjay1f3Wpuki8ZCLEEW9SzEUn",
  "key14": "2dtX4RgJMWVYdsfqaL2oEiFUCr6uTt3MSjYxfXdkL2xwkWYTxw2yX1qcqAzvaj9X3eQEYWWUwEa79iBE7rrizDug",
  "key15": "5YY6SDniUamaNZwTynu5Dcx3gz89UWJBbTvzCoyM2bNxURpNTGKzxondiiEfaBPHpVUSzf6Gcf7xmf75d61Nt9h9",
  "key16": "Pk14WaGA7LD5TSYgoRbCg7zPiKCCGveKpLcaujEgX1273VoPA8nWP94CCzZMJKiTqDGEA9YsuS1WbgHQUSL9Ato",
  "key17": "2qBc4b6wzwvWTkxvJGQtQhWEn5D9QhBiNTRV6jywLhYpXH86TRsXZ14zCExFi3wXFTTBe3KnbmA2Qwhiwqs7hqmx",
  "key18": "4FdwpbQpfNzVJ5Hr2uC1vqRyh5AVh9hLmY96KzPtDa9VqokMDuQd6iFjMyD8aec4xG4QEtsRStjXnweVb8fyHJrk",
  "key19": "43TvjdNQHfQmzavnrvP1cN92cZNf461cfdLNj5YMWRNCc7q5JB3FxovkP1rtSM3MDVjr9iCSZR3BxanMa3hJz6hD",
  "key20": "wewAFznnqYth4MejpZQYyRviTPZAEZqmfAJtro7tyG4WdG5ZMtcLczL8VmgceiRz1kyvLoV2TqZBdRdQ3nYjoNU",
  "key21": "XBNFPwam5Rg6L7oNJdbMm2NtmNNqTgrKtaEzJmrYMhaaugab4dCKw6AnY4LjxvE9UYnZEknekv4JCAXEj8Hkbkh",
  "key22": "3bWkm5in4Dp3X4nbK7AEbJ6NEYGmVFe1jhiryKxJS3j65szTyqPsq5gE2zfNDxEHqYbJ5LcQQWN2H6F15PEQveDj",
  "key23": "3gT1f3YSp7S8nb9JCpfxAqeMKZe5UMPNBDLV83GTWZcYGNBDvmhhZ4jSQuf8bm6B8pBHaEYnPe2n4KSkF93K7rXF",
  "key24": "262aDHDS3b6pF4g5RpnDEmntAowQy8GuwqMY6Gi8nEi27GR2UaD3KrLKM6pV55DCLU7RSyx6v4LeTpkLFMMYoaxu",
  "key25": "4QXMTdYsTNQGU9W4BsR2Mn9GBkDo1z2X7xto9MjsMbDVWMUKQMmeJWBJYSk5TjVjdgRiz32fSe7dDtjpAkxe9huQ",
  "key26": "3yG8vums4oHqg7cChsEUF5FVYjD1tNC7nJQWuNKpZyKnCUPC44PxWH1vCaP51VxTxVfHWvLaVYzRtQW83UVuYYjA",
  "key27": "4GkmCndVSVmBteAQKAi1BQ4TdnQfpAMhhyAEHDNKAEckTCnzMZVpiVmxtWu1c9nTK87cpE718gEMbKepK47zHxhs",
  "key28": "2ujTWL9ov4np4GE9GhSFNN2KMua8hcAxP13bWJwarhvspApNsidgtei93VfL7BpfapVNiqwF1vFEicCbQMmyK2sN",
  "key29": "vpeQYbRsfSFm1mCPQvAwJqi8oeffiEsGJoNri2eSEKd5BVNLbibRSx2zePdmexV7RrkZbDRpcR8jSizKh2gqCsB",
  "key30": "5dkBtPgKPZJkJfWSstmT9Mbf731amqaxBfhqHrgj46nEfDYmPj8FMWDeCmHckK1ndedVSa6Jf35yFDtqUaWhEbzW",
  "key31": "2Boyzu19JXep4ZChYVGkedNvR8jBdtXv4nzfM67oENAPmzxL1re69K7Yu9XtKQkh2C467xVfD51MumeGhNAh9qBM",
  "key32": "4j7cAytpTh8QaVTc1D2AwG6WFS2cGesmyQPhppgFJU54cJrbcZVRRvL3zys8KEPpGEqbELhwJMQF2jTxGqmA97rE",
  "key33": "E8mxgUoW729boL9Ntrd3C5EkLLLcfbXdKzCMdA71R2zeGVPSjzjXFx3kKJGf5jkt5cAfxwiKQ5sQYB8QJd4KXQA",
  "key34": "2YhJVjvMQ2dDYreYVvzEiugYDUJogMqfCzx3nTfhXcbqPxfMiwTZSeknzTh5vKgV95Z2K3tZMAQJ638kTv5L935w",
  "key35": "2eneZt2inS9r5kDXFcu6CcFZtwQ9gJBorWGVynj6meq73MeDUTfwSpuSSxEmyhcwxpU9ejkF9dLbLunN8TkzjMkC",
  "key36": "3c83SRc239f2RA9UKMpKz756iCNusUG3MkkxiEfafKDSz75h4ZGRyvicgu5PRbT5PKtFwXUrgiSWsQ6Eczdf9oBJ",
  "key37": "55drbVMdw3GLzpNv7DJ8DarwQieee9m8JqAwafr1nEozsJwsTmmwG435F98X8ah2DRoDMAQ6TkDBfgKtSspiUke",
  "key38": "5dBesMkTcoFxPY9YKAyX8YKzQhaNm8XtFk5rpY7838Ssj1N4wqkD8ud73kmfWef4Q1KWZXez8LrzK1JtvZBngkoa",
  "key39": "5XLS3apnbpAzEvgWLKUM2uNxPAn8URsauq8131S6fYdSYwt6ceeMkxHgiAoWycD9BkRkVfSn1Z6LJ9Ly4cs5chzN",
  "key40": "ZGR7Mx3b7M9uBqnGirkJWFn6PvLpjXfqZYQ5VHpzaaTwwiyjoBjreCRhGWNnMh2p7GtEQxvDnerETx87V3Ku4ju",
  "key41": "574oPvctUXo6TPpMysPJ2RWFmJqXCiXRGjcwBo85qg4r7dhM2azv4pcg8tR9RmuYqCWjYkjK7cooqLvAJK3vZzmW",
  "key42": "g1Gi55wBVGZg8rm4e5v8sduyResnvrCyqYA6ZQF3Uy3vzFiirw1C3kn25HkLPRjqaMmyvLE8S37Cw9AQ97aNCMX",
  "key43": "27B1aNnjU1a3XLj8NYBRiAuTeho7qnDor6nRtZufEFXhVV8vhQmHrceyFU1z1R4RW5QrEmTxPMkQmE64F2jz1pYA",
  "key44": "5chHfDG8PX8PS4XwJG9BxjXQFPWE5h3F2ZJf2mhb4nBZe8ZYESwFSHtL4bbWVwF8Fe6pDhz7guXFNzhS5iTLizAg",
  "key45": "2BXwsXBfEufPcPks4VUP7gVhbV6xXUm6unSQPsWexuuzzQUHn1Hu8aGGWUrLT1LQgs2Kx1jcWBap3mEMMX9jTdPP",
  "key46": "4Jwvv1D9gEMVqegs2bnG2j49bSRxNavo9wwj8WRQbnpRS7635DWnsBtA8zwi8DcTv97BgK8FqxsCpfhRF7nhDain",
  "key47": "4haVCdyxRZ6QZLjxCHCkTEVLgKfDpaYah2U1XWfBet7R2mJ4toFe7KXdoqFwVbhpBJi5XUZAK64DE7sPd2n9aRem"
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
