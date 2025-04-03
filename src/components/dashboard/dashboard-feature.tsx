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
    "4PoQz5emNE4ZHSqTnoEx8KWJnWqsuGmQ3896Zfc5ikMRNnrhxjEpwmV88FqFYNSjZdL8MzL71bx2oDDHo6ZU781p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kfsiJP5UKKYUENC8siTUj6cHj6zEuG8DxsKkdif8XJYmR2hQb2RFzoF5XUagMBCbU6mg7JcB5evbVqLYZ4xN7av",
  "key1": "4d5BHYx56g1WadgUZB94Vqcnj8ndHhK9sZQWiBFEj5tz9n6r2Rm9pcszhpfNPm4GXeiwgYsTuWMSbTvGkxiAtnfr",
  "key2": "44Bn9whVbr2Wr8tnLdSWQN81eeLjL9mPJwT5WQYoEqXDwhxjaUdQMco4d1jw2xvNiN5Nrn3ksnhSQdnkuUPi5feR",
  "key3": "2kd6MDVwVZrJHXDGnkkpFpdXbhqgBKEnaxyus9qDgmPj9WodmD73PcfX1Sw5gQ2qhhMNEf4KDyc8MsQyz3jN71SG",
  "key4": "QevAtF9ExCAfuWrcJjhmvDg1Q2uCXmB5FYSni5Xwd86ZiP1wMTEtgD2qrNvV3BuyGn4MKyYuQ51kv6THhKvgw4G",
  "key5": "3TjXuzJ1kePL3muWzUNnZqqh9K18nzL6zNU5Bhdy1U7m6Dqs5Z4UwL1TgGB9GWwmh5emQa1gzwnEawtPuN5UBvFT",
  "key6": "2iJUv9ory2Dr7hbNsBDgCoWA3twRuVpxy59HStTDSBuMM4TFp7xcxyohFzW7SsqMWTEUM8Pqu1KpmUhpBMoCE2pR",
  "key7": "5rHc3nx5Wsu7CTcSRayfJ3Eop92MWRumB9tRvBLRS4D94a3V7WiykuehgxHLyDbLZJ8TnhsrBTRZdjQWMNEoQpgW",
  "key8": "3Vvhyh6M44D4hj2GGi8Kv7XRYhXAKTw2xYWDjDb7niydkrriYn77LqQw7qsQucZNaxApseaY9BkPG5Xrpb3xnLu9",
  "key9": "5mgmTP3CZEphcbozaQaczgzvg1paReuqcSJXTrWoJ7bxVcW4FPnXxZZinDZBBqwveoP1pwHP7pD94PVcQ3XLng5",
  "key10": "4cNrQSagjBvtxf5UqGPJPMxztmoQPw2nhiS3BGK1M7Rv88xBNcRhWdqx8zmz722BuBkhLrDGX3HDxavwiwahtcLF",
  "key11": "3k1SMox9rbXFXRLBawkZa9isn4G3PXmxGi1AAt7MChAkHviASZZsjsjzKGZoKV82ExYzoCgrCe5zAUCMqGzEF9aQ",
  "key12": "3wLsa78uoNYDmEU1VT1t9V8WM1FAyrBCEVD8Mck64pJtFef11p5pXtpFTg4Exr4gT63rLDS1zwh6XjUGyn1pToW2",
  "key13": "2ti6gKHMRgnMwM6UeUc5U6JwvreKJi7BH1NehLfT8SGRAtDYqHzxZySNLDYFh3oaH2hA9JdNZ9Xf7zF8f3GSpbQD",
  "key14": "zbT3rXsA7skmzo4x2mbP4UpBpHps83ja2fD2bTuTkW2Q4FYtLp8cB4Q8DyriRfgd7P1WUHCRosboyBVMzZ1sUGM",
  "key15": "5233BoKrGNc1AzeGzsnL5HC32Waotgqeo7mccgquNoiLUNqYjtWFTeiaqY99kDvTxNkSfroaFR55QDEWZZhHqF1u",
  "key16": "4YXhb2kPEoCqncNuEp6f6Ua7HxsswbD9dYXTc4GExWVHwd7N5D3xjpMhCbz2xZVckGPr8f4tWnZwCnSxeUgoSYKK",
  "key17": "2WuE183RNTnNRdd92P76N8zpv6b7YjnMvM2i4EWBcb6wu4TLsRoTKpESQkhoBv7JhA9yHkqA1Pt5DzMLhEdmtASj",
  "key18": "2VwMFxroCGyey6QkJsf7praq1jPiLAcNJtu1SscpJURxRHoRn79cKXAZv2c4sATyXtEXRtW3qxj7hC8Q1tQ5kM2p",
  "key19": "5GudKfDpXhEJmWpwF5C5cpEEooD7gfhuRcKshPxzC6Pgt7U8EzGa3TxorjcTaato88AxPCWSkwYscHLD9PVTMM8i",
  "key20": "TtP5Y4dogveWmm3sWhFRFTXGSb6eyFmW65Z42b5zQbbKXQs8SsbpZ7TisxnJiCnSsanJ9RsSekcpf4i1J6iswcQ",
  "key21": "5fJtGScC6n6YwYDzSHkY9fwTqcr3rs6BHYjYFvctVQXoMHhw7UtFhz7jSMHpkkEiqoFfYVzqJup5dMmiaqrW9tuq",
  "key22": "3ZvUcABP1jrs9N5qy52hh3JmY2qypQpkmEqaBYrLjdzDtqVdKaFcsuwWKbSLUQjHAhh8HZeseFybdjxCB8AjEvwC",
  "key23": "2GpFq3HMBCp7pDfTsRdhSctb12gsq2pdy4TSiknqDvqQNAUCTPXiG1bXXXx6ZQ3VqdDc365iapMZcS4nr6CorGtN",
  "key24": "4K9YrkxHoaiFetTvdoTrmhuiizrnA2WgWeMdQLjTFKak1oWwVK2iN3nFGDof5MSDhZSuTzEYhPVdjcKpbP9ujEPe",
  "key25": "3MnAYKTKsL1RjE1kKrdxmjSL9h7L1jYfj5zZ2tDYzQ2B9LMVuarLd65ntLu4tsBBqqGdjLGT1baZquKQphXUQop1",
  "key26": "5Vb2uRehnPzNUoUPPognRBYcZcgLRiHN9ggben7VgZVxpUsyVcPkPCjhPvHHxPsNPic1k8K3pvfSzdpmTJKTS8iw",
  "key27": "5kWDR1seZPhYK44bJ38aqYsTTi9q79BDQvEQX2KkytsGN2GQgL9325m46PXWvbsn4TvxHN3EiWnjpvGeFwDUu5L",
  "key28": "3gGbnjoeAP8vUwGSPK9PDKhNPweba5jGiDoeKFc7A3RJ7z6LvpS4xR1LzFMzSVkFH39kzjPzS4okAkN9T76TV8WR",
  "key29": "2Qbp26dtZcWE6rNK3LCDiBRCGiabUjktEX3TyawWxozPNzU2ghwLpsbEjaX5SZUeHf9R6pYRzH1fMHDn9RHZ7iB5",
  "key30": "3qcpohdzLtg4eC7VnDCBZpuXMLg5zn6NQ2Dt3QxqQTmdCUDjpDS6cYqMc1K3dHbPhDiXUb1oMo7tdigaRqTiq8iK",
  "key31": "zdrTRre4EsC9czNgHkHj43g7Hxba9jjQKH8SB6t1zHvrjM5mrxqmyXhmTS2PigbqZBHXcMXRZ4prGuhRHWNNByC",
  "key32": "z1WaVVHuv6eYc8RtaXnoAB5v6qQKuvB18mujFLCR9FJ9Hksf5fxuy1ZkL86CJMdpdsTXSDQhh4j84CS4yyw24oa"
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
