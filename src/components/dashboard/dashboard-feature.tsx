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
    "51SVFDYjHAm6ZLXxQcmTMReiVKUPXW4RmEigShiMERn6qnJp1Z624sctSTxQruwyaDXWwySUgmpqdUsgXfiRdvvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PrYSJrQoByg1WXFHCZbSzi7Avi76nEe9hTWhPRaVa9RWJjSbrpVksxfWWBgfcvp2UkAuw2Ee4cVUHurmBgwUus1",
  "key1": "tKaviDM7487HyKYDVfebrYQbmSH33MYAHQiUYZjFXZ3LkDNPGexqiPPtGtFdk6XsLbS8pg4S5x8BincsiHQqPit",
  "key2": "5zF4qTtGVnojDNxmGxJPUYxPNynzkJEA5VHjxhomat5EDwpmV5okqmEeRZoW5Nr8LDSuPctBmLvG8T1X9J6aUiVa",
  "key3": "4bTiHorjSSK79SuzX2uiKheJQRB8WxEnMqBRQ6VzzamB5jrk6wVFCCqPmEu3YAcDUKkqDG5zvnSyoS8NLmkBLEX5",
  "key4": "3DhBixL18T3nuBPQsYXxZcTHUJCaDW1id35j3evrpAs8Ky9RnPLDoNA19dWssVeef8CHbC6W7TpAUKpSZp9haJWF",
  "key5": "2TThgs1nbp1YFGj586vxUq8MggtzbGqF8hcJN2A3PigXNBsaNXBuSYxvWdxPCVba5yC4iFXGydBqZY8rdCdwZsCk",
  "key6": "5GJczqY7BBU29rouyWH5LowUNrc8jBkNKTwuhzCYcQXifGTp1oDbffZpMx73B73DujQLuHQTXiX6KAvmyAFyN4GS",
  "key7": "4LqZDYCjxwf5KyKf8Sq3BiDJ4aStm1Eopq5hkkMcGLcCtx5bL4r7d7TqsTu2AaryrdukAwMxQerxWDZ2N456rtSC",
  "key8": "3CsDmNDcNHSmgAnWLiVqZniJVJWahPdsPDzMqD4qdCBBNwRQ8rduehMjqsB3qsLfU4r1ei5xoY7JuhS2Ro8DvB1c",
  "key9": "4hyKes5rGGv6PT9tyQzXhAymkWntCZ1YQkpa8Jeq8LNmWvaiLGzw5zikmerUztvKx7J8jGP3cFME3sjoqwQ4v5WA",
  "key10": "3HNGdPdUvdyLj1WZVTYLFHmC3Wd2t4miK6znJFhBKPDwUvDcPEwojFiDFs99BbGUSUtLb7YkfzM4RDXN8pp121L2",
  "key11": "5zvhLzuySZwqQVYX6zvq1Jw5ZKY6M7zyckwGwxAEc1RdaJYZJtJYfUhRoJzA9YLeLu1FMqKxCfTqkMw1vbVe6mG2",
  "key12": "4R1ec6krkYYkEpwVTzR69mTWmcK7iU2NwkDLubEzTTsznxLaKTFSgotzjaSrX4trdX5USjgHqkRSfa1q7JhrvLzR",
  "key13": "2AiHobY8mZ1DFpM5PsZJzW9jrAb45gV156qXDqDyVKfpvW3FDKQRWKoYSxmAC5WY1LgpkkThEU7ppRhcBb1Mm9jE",
  "key14": "3sEnvZYPCEWAu8pnTHKJa6Xi7FmZW1EXmfSWcB8fE44bBmZXPd1paCge34kANmT8ob3HH4ijKMzzqtJMAW4Snd1p",
  "key15": "5DuGn6u3JL8kmbhvAUVJGAVUdTc7p1fjVStWqyqQwa3VjN8V5rU4BFpzm89CXzKfjoEwhrpcd6zBacw4FYL63Z5v",
  "key16": "dtVkX6WsPQtBJnQGDhVjMCBExLm8vABcDGgiSxhaEoPfibA2WPVtyHUautGyWMvYwDtSb7kdNFNZxSsg4kY6o4v",
  "key17": "CqmfkjEnREj1MM5btKJ6VpPVEu6pmY6wyGP7dUaqU9VEdXTCCHuyGY11XU7XQjDR8yiHmNsFpMLvvY2ZQepXBCR",
  "key18": "zV3r75Uph7PDbQqNSnP8TtS11vuzQunVRcU4k1DQBThEdmaSWCminV9N8AdAtjBW57APkNpbzZCYZuDPNr6cTGx",
  "key19": "41f4zAHoSHbBUmtgnFm6cz3kQT5pdwKCQ4yRNaqKHKzfVmCPSAmxH2pcnCru3smv7xYhHG6N1jhQwPiR54LRPmTL",
  "key20": "5vYWn5Sa2eC3S4mhur3oivBo5xQa5FkDEjbwyzvEw1Zrpf7CXRFUSLXb4zMio9Xt1wePENNTQSEs1YNEQPdWZrtY",
  "key21": "2bAaiW9tVYAF6jY8GUWfvCd1VimzU3m3Yty9iZa9TuCQFW9v8nsj4x3WCyRQ7znJRCDJG1wB38stU6bZdozP8ETa",
  "key22": "vr56QCb6vpDpxMBQhhCsgJC4NrkRG9QQLur51pJLGMpfmgQGL7j1zNpmA6Nzdo2AhvmeFC5mJmmHKywtrudrcZW",
  "key23": "YBnpf9wahv95AQxf7xqVoiHmxJhtHZFiYV35vEimEnmR2WLLa9FudWmftNnXYPD5HzVuGa9j6CdEw9jySnw74Vh",
  "key24": "5ZDRxNAKURnNaqjL6jzDGWgnNoyiatFDvNHLbCds1SawrDzGPeppB2PAPwi8acRhTUbtBxqQcuroxukah5CpZquQ",
  "key25": "2KigZMRmeA43vUKyVpRT7Hso3tq39srFZ7qUiyZbpByCjM9hhusgA9aunfWXB2FuUMLxn9DeoUNpD6vhfDfCEnCz",
  "key26": "5dSKPh3VBdRj8WkvjbYxBHixfeQyPzMNqpqQiVzN9w1YbRAS25irEXyTsgau63TBGKQZRmyzeR7ENVEWoyQ9Ugw8",
  "key27": "3vbsdb224HN8eFTW6KoxckEjGGjYQXkJPFBVoWaH1QtFNuauNuFZSGN772C3LPQ738NBcKwZ1aBRQxZ3pV1TthLe",
  "key28": "5WZTEVtgio4gguMrtfMvNwPXGGafgUTJ8atoG65BivxQr4run1yYEexB4gUzUginfPSmhrDdrsUWcuPygbPtB6YW",
  "key29": "557ZCXfaD9vZkwPCQ9QbJcgwqKUXXF8rgAHzZF3z5p7xAQzyRhA2gGLJVMC9H8XswLSZ3F7y7L4JvcLTzptWCum5",
  "key30": "3VwQfzuBHVKSwnpavNXwR6Uv4wM8gdAfeLQe4Cx2VrKPjnu5bdp8oHKoSP4xc9DEieKf8kkH2J9HMuE2fKpSisgw",
  "key31": "Vub2NYTBeGas9aWPHSeNGkmBTPwFeENBimeXQDfWSkSqwu4Y6SxHCRfRhdWkVpAxiTaKb788m6qDVyCvbAbSAyh",
  "key32": "4DEtUqp6m23Hd4tYWkzHsmcgM1zBev8Mhg9JZeaL939H5fDUmujukNdoZcj8n5bgCQGVDjojJyzuNUPiJM5MKTC5",
  "key33": "5sPvndep3S38TAQU5pBCRMRMmyDnJqAJz6ZAFqyJbp7erjNf7RVgjSXri6SNr37MZPTqFWgmhoics81CjMKENJxH",
  "key34": "4Xa3gbXAAsZwNo1yDKtBj4tq2NWVg318QzZG5KwamVXaCg4SnYkxHbwaYWXmRe9d8iGJsriJinVdmkDqQBZoNZxh",
  "key35": "5Pp2pK3FGhdHSAdKXoq3cS3EYGPKXX3wUAho7sEc5GAJ4eT1h6njwzUS2PmA2RZU98LGi95zfQdTZ3rs2wbZbXSW",
  "key36": "123uGixjmnzXC1EEbFUSHutCwJ1MqdFVtMdUSoUCZLoZ4hNnyDE6XTi4kjWd6xCQDPnV2Vc1PTGr1DW5HVn5QoX5",
  "key37": "2y2R58RZPTMVCpFKRc1jwRMVtkZqsMbuMeK8dR27bsFryfDSny9ne1AGSVmZqEZwmCXXXLEwZGEBqacHGZYpJq58",
  "key38": "5iRC4hYjC5ibHiXzvKZUDy85QnTvsRfCVz9skBnQiWBUkeASw6SJ3NKHQMPh9eiCsHopCGGsg5EcpXnPUkiap7N5"
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
