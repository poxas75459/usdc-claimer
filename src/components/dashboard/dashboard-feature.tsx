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
    "3Y9XDYLAyh5xzsRswxkx77MZFXY9F3wsrBkkybBR4DwC8NfSr5KGfnfVpoWP5dXxBw5fXE5Vn5xPCnLXgf3yMV5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WBT8vtzYit4o3KN4Tf277TvLxbBH4bADnv63MoMfHBS9oJvPpGu6aA1ksZXAqKirrXp4fF4CFphTMkhjghGbg92",
  "key1": "416fBLQgiakbL9xQxryMYR7HWMgYY1E6XrgF7xw5yDu9TpgmJiF7f59t4a1bK8acZ6MBxrxDreqifsaC7tqyoQFX",
  "key2": "3gdB44DWVGccCMrAXmmbMxRNy7YoDhYJoG4ZZVSA9rpcsS6kgNrGscChMFmyJzUkg1CchRHxx62hTeLev9Mq6KDN",
  "key3": "5wY4iUpWJ1qQ1RgV7JZCdwxYuBk6xtEthbFAijJ1rCkkGgugbY6TKiXJYEBBgn3r2JPgBAw6aqm4faJcdcJq3wNS",
  "key4": "5pTVj7YR9ruv8Q8HNaw7HCA7HjimEEGnmFWwg5S2pdSU82bFGffe9ULbMCt8jsmoEuagRJcdbeuet44QXNvaFxc1",
  "key5": "35kPJKD75iQ5ATcoxh9wUrASgsjU5fVCBWZkr5Yz5kEKTK9j9As33cs7iT1gUCFHNdqmbtTwX8GFvrK4DvPNEKh9",
  "key6": "67XvwKi85EQH8fChrYsSuWT5mvuQM5rWfWFtjjEQeetBgTj4j9KkMrAuwjRvPZXB2JbM5Rf4pwykFfw9tqo5cn6N",
  "key7": "4SoReXHRTB9dqEqqoL5ebdMyiDHH1VLrnVSkYPL8HaYTLaUJMvNEnkHXN7YjV8GdZPJEmqiUNtWXFBPanwicU8Cr",
  "key8": "5TPnmJ7KakkxCUPLqa9iUcAaswXVYUA1CEE4nJj52v7sv5woWYVtVPWRpHqx3WMGov8ATVsCjKbopi7BnNTt5J3r",
  "key9": "5qoFm1u1Bi2yL7H7WGPv7EpgCnJap3pGxAZhxEgD3B2Zkpr9jbUnHbb3aw8pNthP5HV28RJ1v1b2cDCZGAGs83o2",
  "key10": "36StGGv34svyCrKx3MZRUt68QewYYcnwoJZpHwynJHkvhjQHdNfSJsYqyaZkhpCiJvbu5fhujBSi3HZ5zCbihjC8",
  "key11": "fUEbmSKk9SNg1kzJ1XzhWuQqU3f5q935JkccxbCxKvgAutPhxyJ163oc5V1ZYkeHBT67aNys8dgXc4wexDkUwAB",
  "key12": "3xbKZhobnBNBpd82D9eHp2ueZ45dCA8SFoNdLeLr2ovYtYzRD3kaoULZwcKg9cuvzxGxAtpZurViVjqXaA3fRKQp",
  "key13": "2QH3gxf3FTH3BWYePk4mQRfM3uC2N7o93ZVpv1G4wDHV4w9HaTPjVJujSmrbfEdArSaXgSHRuJiYVsHjZY5XVxK9",
  "key14": "JsLmekbBuKAJveWzpKJdxCphb1CRSnJSzzaYFNByEmZWxxxA1ckyn1fSyFGKACT7YRQMxZJMpHkeCb5oinW6i8b",
  "key15": "4KWxf8NA8c1TmUUb46kCxvsSZKirZmb3FLcDZSsD82HJMWxNnoCHzLZcCQiKxYKhXtGXYRqYTkz9MmhCafCxPxb3",
  "key16": "2aqiZZ3DqBDLtgURccAQDtraMqRGzf16zqJ7M9gay9m8moA1hjn4GWU45xCYfn9EJCvAn1PK7NLTjs4VaZZ3jnSo",
  "key17": "5m6e31odDRTzM4haUSaWh4pPFpGAcNyS2t7Yg4R3BwfcLixa4vHDXjDR6Pky1gPHE3URBnaWoxzWaEfSFFABTFdM",
  "key18": "5yM91mWNXrEPdMbqKeQ5sPKjJGAhmNnJvXkzcZBFpdMFHsXGDEqPH1Dco7CpFQbv4PGivB27mtNboobaoTSqNkbJ",
  "key19": "2oqL4rdPpHNo6z6my9bm9s52YChYeZ178DMiXFzzyUupshep6F9ndVEr7MNSmZwkutxFKRU1wbZKnkjkvCHZ48s3",
  "key20": "4iBf9GGDiGHoW3hUf6x6L5bmHMfQMz7PSQ73nrYKrrDVsfRFnYZZGNh3eDDh4odHNWC517ivmS6YoE1iJ6HJycww",
  "key21": "2F58s7PN52DAoA2AHA9X1PsyD5vRkNck4XyTsh9hAPwU8chJA41YubTN81yC1U3Ur74ESrhhoJykpVXcbaF8SiCn",
  "key22": "5X4t2nc5iJhYoEgQSiSuQJHK7u6ut7NGn5nJcUY8Xsq9yEjXLGd8aCiba1XZFQvsTkwCCAfY7kMTL7vxqiSzJXgm",
  "key23": "2uCTefnVKj167qqKhpcCJLfGcioBrqAWa28KEfYac1LZWY4mR4xxbhoURPyGBc5TacpjmSkaw6vVQvoSyhkqZCcY",
  "key24": "5s886r5YbhzTvRBNScaviB8o7W3Sik14QYQfeUWQYDFXjkeGCgBzxHiSfu3yq4aorDchm4iCjuy3fajwDPBjjMA1",
  "key25": "44EdFz48hAHXGt143kJLxWoqm4oiqgDpMYUeDzNisMusCzreoMWqNzKc4pAfceQuzALV9okeC5W71Ro64TVyMMKZ",
  "key26": "389ex8ojsPG31Jm9HYriRuu7V6Ug8yZ8RBqMQvmampRFmZUmHDB5YT8F2Niw5sKes9cUz38p6Np5dE6FqrPYyeQ5",
  "key27": "25VyQ1iJ2zgoxDsiKuDrS6RzHJGF1EfEpPPRoyNQA9FcyPsATcMBb6cKbQqSCkeqMq2GgzmxQkgoQXdoH9Q4cVXW",
  "key28": "39mbLxp7k9Gri45Agb1hKZJm1txdEejSr278Dn96NEq38CPKZknzoYhBhW5L1Ndr8Cup91gXrppbTCcDWDpgqYNh",
  "key29": "AgusvuRWE69BSnFpx643s3JvHzNrESTVk3MiqLW5LMJuD8CodLnwWpW2355m9surWnmSTQzbdKZLh2MnvFSecKc",
  "key30": "2vJzWNWo7CJtFn2zZbMWhLgsK6iy5Emrh1NYpNjWLLfDe8Wec37iRkB68xbNCG4QjSR5vr752DwtYt2KSgRYAv8j",
  "key31": "5BoXZDKU1L7f11TW8rewe6Ny3xfwbWzAf6cABVMLePz4vaMiUuW6zTC2756bUH8t7HPWNzL3dcYzorMJqQEgh2jJ",
  "key32": "5bQcLkRaWLkS5FN8dFzVB9AVmE5DWPpxrG4pWEYjFNkSckRMq3Da9WxQZWEaBEYHVaykrz6bbyhV4x1xZDmpTr7h",
  "key33": "4PppfJYkYJUmwwB22BRAYV2SD5iD4GvAvgLNqkue1bwGTVpz7YWEppdzKDDU3xgtkZN5NxTDUjMnHphqqV18iobZ"
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
