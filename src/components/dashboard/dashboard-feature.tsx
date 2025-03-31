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
    "4VTW8PqLbpWNMV3wXBGrwbUimQu4Db4aksSqgwPsSgbG6sv7dqEr1kTKteScPpHeNm8t7vZmLAdT7ygsFLNDjywP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tj5Kg9XrzMDSo3BM7q64Z3X4oUQJ4zHa5YN2hKP7iCcJ6iU8StcUH8E2qWRVGtPtxkPsG1zGrwFM1KpNgLWCCWY",
  "key1": "2ZfZrBF2zk5cB8HNYF5bGtncieWemVDB8M7xeGqHM2vM6mTq4KwhdUWq6K5ZJx1u5NMP9t2b8fpD3CE6byFohcBd",
  "key2": "3atdnYKK25zGsuE9YqnNN51v8eUn4GRcz9f89e3Xu3ZRwnRocWz3aRfNVSVpZNjRuU3y5gmPbWkXWVmaMPk68uXx",
  "key3": "2Rr9WWDPF8kBPgm2Ab93JY6EdEUKSkWE9HT6zcSrNwv8vx2uChmp2XEmWTYcypmDBJEH2QSNmj5QPDxxuwe7vA8n",
  "key4": "3ANtQsLMistQRJnw7ZaX1d9ppo4L3n7PpHDfFF1fUNeJGhUTGbWf5agAK3Asn2ue2E3vDKSLVg7nMP34B93Cvs6s",
  "key5": "hP422R8VF4GvBLgarxoqoXBEwgyTm8kuCbHHAyCXQ7zaDWeRR2pkK7Xu1XAveJ9nyiZJZPUKR95EHfFkXXevzZF",
  "key6": "3VwTnzcskbUiGeHWQygJsfMsF5zx8tbqoMXqu4849RZkhBC41sg9Z3hm9WacfjXTzVucKmdSB4hC2eebsWU7BhYQ",
  "key7": "4j7jNJB19jgUbhGP35onvyDgkYU1KKapn3XduCCD74ZmtgnAaZXShCiMekdh3JYuz7aWiLpbFqJzFMLT459WpNGJ",
  "key8": "646VHpiSUNLbufY4szZTai2xhKjHnM7rdU5y6NnrueJcSoZ795vJxhV3vy1eSr8uhLTJYnBd4HRDWHN64PBxpidj",
  "key9": "zHGb9yELcDt1HqRwACrdEsGo2E13FxUHypMC82MVD1NxpPNY3B5diatT6h28b5g7sCiHJRpubDMF6sGMe4NRL83",
  "key10": "5b5FgvSYPLqJjyLsYbogSWrTovdcDgCiCkPBSFxZn3hpMCTmFJJdM68TFwqCQXnV1StDYB8rR1QVSD7FK1SLdg7s",
  "key11": "24pGUUQageLkqudA7qTw6F42FtgxueeLHsDGskkgN3W3wNQ8ysjySxuwMWxz23iJ4tyCF7S29rpCrixXeTFFyycj",
  "key12": "5mpt1fVBJDbfRtxgygadw2b7fddHFZUz77PvAyJgAzg4mwMCHTHQLZP4khHbyjV4u45rMc16st62oeJrz4DeNNT3",
  "key13": "ebnLEJ4XDEq9jHkqu6rEsGN5M3C1SyncYqUSBqxYmTpWdZZfXLrtX2KCh9mNi7kC4KBicBZqBTvLFsmo2kxNdtb",
  "key14": "oiiEvFFHg3Xh3mFb9cWrhsF58UQKKgJ2hjqYoEKKVcVyGatDEmeFQgktAfJfn81C699XW4NWN8kDAq9bt3PmJdG",
  "key15": "fE3dg42FmegX9T3DEHvAd5YV1sxGJkGtbt56M18aoR5Cejbtps9o5tnAuKPVUSBHSWFcu8p5GLobqTUVSxu2MJ2",
  "key16": "38pyC2oS3uP9FrZdVU6FUmuRXNNamUXMCQfaijqG3qhn3hqYpdpvH9bPau5TaU39nKvc5bEpXimw1RyjsUZnk7Mf",
  "key17": "24qsSNxT1k51Bo9o6rcqrYQsij58vYT8PokWke1DQtrgCdEiZz8pLLRyRsLv99wfSRt57PmLMFduanpaTurLnhcb",
  "key18": "3hJRbW1etbPSbbnrWPuVNLqi3byh7baJcMjpjGQXXCoxZ3P8hAEd9tgWbrKKeB5kPVHP2L1KVGiYSHPbNFBLUwtF",
  "key19": "33CeU8zttpZhEPuRx3EGmGdmE8Lv6qVXT2aqu69kpjzayGHbti8m7fDLLDSL4MVQoBugUSukuUdpLf3qB4WtkiNc",
  "key20": "5bheQNcmNvTXkDFsvzQTorFBbvV4jFom5qUkxPc9KbosR5YunWwwvpeMSmyY2J1yo3crns9g87cceEQc95PATirt",
  "key21": "61N9Kh4uP9ySBRZbU3exWR8uirZspVqjugPvHR1vtcsgNbY2Cea99FrTLakuw9PM6vWmP9Ayb4rH5QDQYnYLYBEW",
  "key22": "2h7FVxomZp4vKEUxCXZEMqq7HwtyaDXJNRrPCipmn1n8VvqbnKfVL8yY1XG4m2EDhxXz1E6DgtAGSfxaJTjrwwLp",
  "key23": "1JECJ35LWGtwsHLJrweVcfB2pctp6ap9HCWbJhoiLP3vU5hmhKqR96X8KsXV5dRssLDHVdTPTGV4Wieca118vu3",
  "key24": "3451bjs1Jbrsax9bRGdcSxHmtidt6hTjoMvSmdsk6qbir8KmFpzrwK4pKCyMyL5W3CX88Legtwaf4jUgXpofbyVa",
  "key25": "q9H5vY1j67fRzKMazbgAB4B28bNLPADLf5ZGNGCoyjW5X1t68YjKysn8xLA4KNpXdBkqvqf6kTFY8AsWf9GgLah",
  "key26": "4yrf5wupbPD2K9dYnYktBVyWqRVs3xvGf2WDyM8nAJV978wC956xUWcL3V6nJpP1yDtGKBa91DXcUsghmjw6bUov",
  "key27": "31LY8xDGZ8a7ABWUxuwsiwFj3HNooRNSwP8g3BGF7sJkVhyLWsPHa2qysxLGtdNrT3YG8554WYPjqTMUwvnYFc9B",
  "key28": "3S6C3ujVZwxSriHDQxNqhxfVQjW7sQaUgLXXSaPhDxfuWS9cL9N83k3eBGZaVz9DvZzcNiNjkDPrQfLGD3GVcV2i",
  "key29": "zrmZ38vBEXh7v5He5pFKkcThdBWHCbE5iebxX6ueRt5vKnjK8e4M3XUq9HukrPNh9yAofnoyLH4aTUKAoeFuw2Q",
  "key30": "hjMCk2HWciTAk9Gn9RmWvsL7ngQ55ZFASCthm57rxKtYXKijQEMDVMez9xYJ2ZDBzJzb1ctjMTdXSVV4RKFJqNH"
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
