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
    "4HSFG47ST8m2WxFhP3vFgJ6JRQJHZBHyEpZ751qA9dEKn4EAofF24DvcRqFaFMrsQvMYd6jYoRQno9Y7weTs1B4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34tBaeN4578RbbMfykuHAxcoE597bzuMtzRbCnMHxK8xAuQeTBzY2BF2V5suLLF99XmqugnqssrnkCxeJpuQdJHN",
  "key1": "61eBd7mymyaYecnWpd2eG4npg6sgmyJkikJ5o1kCdDZyb6NRyf9M6kVYW1hy5pwxj5KQfF31gj7AQJj2V7oNUyp6",
  "key2": "2QuqMhGMsiKcntB7bzCEAP9qu5yyVELLP4q5nTA4XhwC5F9LXt8o3RgzYT9w8JwbP2veBbcv3v5jLwXQ3f747qjY",
  "key3": "4oZ6PNKV2uUoQeYent29nHZ1N4sXFmBGAC9HWkRtbvCxtL231HED32DL2RkJZANp2ipyx7tscMvMs9rryzTQ4KRG",
  "key4": "3jSqaataHna1Ecm661zeh6eNFdPQLhWAkrYJKJAs9dhScPCEW5KKi4gz2H2Ru4oSymbvNmcL6aKBEAZ7q8jisbo7",
  "key5": "37qs1n4zML3CJCJJfcP7PFt2o19hbXPjuPfy1Zg4a5DpXHudWyj1QVRY11vq9TQiYGyX4np1hmJj49awzvJs9XdT",
  "key6": "E8L1hRafWp7op6ai5Pbe4r3d2uFzTkEtPA6CJXSoGzh2UBwArggi6MaePs1y1XcEFQkNLLtHa1H679SZsmEPJP4",
  "key7": "4eg8d7WMjQdggppHPRyhnHGc6odYqsFm7uPT4DNjWMpf19H3qBZz8mTpEVNdsggXzbYvxBrBpPPe2BgxnJso9gei",
  "key8": "N6tpcB3f5Sns6U4D4Uj3utx6rrA65HdngNaH61dSuNuDTXe15A2qApe3DxewYcBAvsphTFBy6zT5L63yFyx1AVZ",
  "key9": "4Y87S8qTzPGGzNdrsmwPNafb1x1W8nivnyt3pRTAsYcza1x8Agqdw1S7Rkod7gZqgk5L6bkiNBcdMuDm3g13Mg1P",
  "key10": "3oY1hDC567zVhtWSHMu29eorS4ZT7jrwng2frUmLWSKDeTFdxyYKw8MjAbCYg1gkNB9vV6GtpJqvkjjkjJY5bDFR",
  "key11": "3NjW6rttymdNfAWvM72rMrFDZVwAKbSShJe2J9q9LG1VBrpCP4Jho2J6ehbuYcpodVPxgprAZsoAfLNkD7eZLdoD",
  "key12": "4qcmptWyDj1gBSNZhVQdCyK7qTgytZ1shDw7oGNZB4dYaGBotjt6XTNJf6DHgG9wJCpA93gL4QcKkKZiyzag5NR6",
  "key13": "4g2zpKSmZsoguc1YcN2qKfokN3T2PzCtt45ZihiPiRc6aoGzruRMh17fveA2gJ2jJaeFC5Vah4dHyq4DaiuvK5Vh",
  "key14": "3hEP2EuseCxAHd1TBdRmVPmNGLQVYMfR6CXA4DFC7Ssi3QSuKD3k3ZP1KdZC1cEvYbBdRahWFhCVHkgnaDc6xDto",
  "key15": "57jvV4HAzaqL1ZF9DsCcsD3XkEiKoa6bMpCmV2AtFyMUh2e7SwsgoEFuc2UyeSEGDJ8KUfWhTJb1frdL6H8wFqYu",
  "key16": "3gsAexcSLBr9Mrha3Bnf7pmLyzAVXoWuM9RM1xo7vrRArD1fR2dPwmCr9FvCVTu1JJ99nv236nPd4u6vDjk99sP4",
  "key17": "k8ZoaouDmT65zU8ZZ9sKrk4Pcf8ru7NvG5jaP7mG2hV6svw5s4PWtxjsx2AD8dvPtjTadXwyTMoAmaoLM3PHDpV",
  "key18": "3xyBgEazKGSThKasThfr8DKZDA5KZ3UQnsaim8xTkr8SJMAJwmXReBjM8A8697kca8MtghLSyJZEgF4mEbsDBvv3",
  "key19": "5pFMdf2pD1ZnSkaS8KfpPFY5iEcLUS7RYuAGQFhWhmTBUNRbq1eex1eNNm7ruWabpViUbHho8JEJarye6488Wr7z",
  "key20": "3f1Wi96X67AH1L2Ar1nq3ZeVyFS7ycgSjkVxsUWYuC9JMiLhSzZ2FkgNsCGK93J68Zs1Kt4TJ34qDp5D9ck8XuoW",
  "key21": "MsrFyVXG29MGHQJYEzpohiVvYSWDHDLpBvcGACo7o277L2YQgy9PvVW3eERrMqzY8MKix1RDLQY93kW7yEU9meh",
  "key22": "5bmY8utcqwSGEWDM7Sow7RFUFQqoZhHRLxPd2ckacEg44YN7vzp83iuzAoePb3gScKgYoAbarSb1vyRqbaDssu1t",
  "key23": "49vB5Ljw53A1T4B4AxCmp4roqtNH537NV9xPmEhfzEtfe7B3Y75iF595qsgNFgMyVXr9PnNxjRAXURk8cj8dR9hh",
  "key24": "YDkqnXEZJrAdodF1VJnWonukdE6NGXKFHaEh678vxsu4HjqSpuHvCf5GVCkdnqTARd2gRnk7UheMD5mBFdB1sAq",
  "key25": "hhhjyg67Qh5LKpv9B5nDW74DpAggpbmZpeTAp8VyDttPWgySge9uzaFCjPDtVEzt9aMoFwyQgkks2VtTPbnmeP8",
  "key26": "5oH6ZnXTX1CHkEq17o7CNxWwAoYpaQu5Ks9Shp6C38MNPvVEckHJUiYQ7rPcuFqqEg5WWEEHYJv5UiNQi3pyXHKn",
  "key27": "4VDXyTyoHEkXxdzDy2d88ka5wNbuuDJt3N4hJxzC55dh3PtCiRjnF8zRzc4SsCAonxLMPjp6qgFPSeQarqTUtzX1",
  "key28": "4H3vvkGPse7Su93wKXC2cr5hLev6t2L9tM6UTRvs4AsUQHrj23HbbBt5XhT9rFDSY2yJKTvcjDKSGVNsegFkLk1h",
  "key29": "YaeMrKKFdpTYtrLfxhyfueDNhUNPZqjktgpXDHZaMvZfE1d649PpuiRgB8dSXnuFT2qSCePB589gNAn9tgC8sKZ",
  "key30": "7793Wz3QEQyLBAguh7QEFq52agakmddDKx6Si2omYaFTvAFsArpBC4zsFedDYzC7ifRVewatCwhN86tdH86z5iP",
  "key31": "WFeCcew9poJahJ4JKqowL29xGkrf7Eg3zAEiAJngQA3mh44AN7cc1dzkHSBpNtoGxpRBaJfHwCYyMLTR4Z71NvQ",
  "key32": "3uASNZvb6Ap779UYmVXvNXA2rGunG7o7RwYeKkJ2mrnt46A5oDdYEa5t9kfmGKBSVz1fn3kwBYXhTk89UcJuMTvd"
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
