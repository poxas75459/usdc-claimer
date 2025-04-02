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
    "2wVt7k9FtsRYi8fKTpZkSiQ5megWLVLpN91HiJ7UsS5AM9kE5J1tjjwcpFnkyZW7U5azpbAiKTvFaLy2teUChFwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T21Hp4yrdk2h4fFbnbtN9s9xQrgVcNry6XjtdQ6xAyj2RRvretuZMjsgjKjrYwCW7nTqEXts9vWMP6nNzG2ftMk",
  "key1": "39xeowkKwWHmNVB5isZHyVCPAnf6mk1PvVbH8F5hAcTEHZ9krSnYiZwwEAn1x2r9jjQsJpEdjTrpFPZGfHXHRYzU",
  "key2": "5twt1z9La7BLz25bvRVFzasecB3ppdMAc4QnKJmQaLhL5J6zFtjJh9A5ZdtyrJSVzYJRQCFpNBVEiaPAdCV9CnFc",
  "key3": "ps4cPft8nTpYbnbWcZvWsdNCCMnkPzAe6PkjfmQGTzUiy7afwLhroLHqMUy3SnZQWSRobC6z916yGnFyTZ11YBR",
  "key4": "3VNJoWH2H6UviqmBCMjVxiGDJpA8StF4jn4HmUuNuKtWyA8ANVySXt9TALJRMTyvxd6PRtqtH9AzKC9yaesrGEs9",
  "key5": "nr26b4S4BqtB93NyP9S9gCT26bppn23T2KZotwNPfJyoMNFogJYtdH7FCcydhpz7ajdc83qM5a3fNvXgET4MZKs",
  "key6": "3VGhYWBDfMgNjKY7MaYbcFGp39uE26cVTKH4XFWJo4uT3dyDFfy5Uy4DR3D9qr9VaEP4ixXndxAjH4DvvTE6kL9z",
  "key7": "2rcCL1Te1EwMkpGGHPXn2ukEXjm6Bz4dx9BZFHRCF8F7J2Eey9E2JWTuB1iyksDbA3atp1omFARajbpQBkxnng78",
  "key8": "5PeZqmrBye3zVE99KGfeNekF7BZ5hFviM8sH79g5r7Twpm5QT3TSydkkJKBspcCc5b1YF3ngjnG4hro9wnZdWct2",
  "key9": "28fy5FRNKEw6cf69iY5u4VBYJjztnY3xc4usVFDZf6VxmaAmX6oNEYGoFwaP52LnW8fmV1Y4m9ho5xMdRahPHfkj",
  "key10": "2x33FLZ94k4L9NEeqTWhPzJ1LpkJqZPgk7H7SyAnHmbn86ojXmNHGb1JZAxcZgZuWXyuqB3yecCJ5YSsG3VbF9Um",
  "key11": "5NFYM3SRfgjWmyyh2YAg5zudniYLDpD9wVRA8r9ZaScTzDiQLHnmc7fEwHK9BJzyaUu7tjz52wwyz4PYaRfofkMx",
  "key12": "PQxSTuXXG4sz7wuJfkTJn572E9cnpcNSSdC2reejxp3Mj72nKhbUdc71sUP1QGJWzQbcnbXhUJoTXtxbL5mPFWY",
  "key13": "61kaDTHTs9Ggjofvx6QXKpCJ295RyvBkMoofbHy96Mn8kDEPeWMDnMMGTATH84kWqFjTgMpu87dpLYEW8bHuLar6",
  "key14": "3HVCLSWcuwFyzNViTiU8aZiHrzfwfJ7UtqudaHwWwgr3PdGwXAU2NMK1N46yqgQGh5cyFkQMvMnFVVtsodxaUZca",
  "key15": "5aW8P9Yy4sryXPVB6uo6F9wXvruXS5JWFFaKYHmJdX5GvPF3PYSMSWn2KVj841wS4RBhJu4myddvF2uiJbV4t65V",
  "key16": "dEkYHfrSnDxvXUtay2RixHeywb3E8zMcfSrVCM94h63Fv9upPuBTxac3pCBwpJfVrum6ufeeUeSmb1iE9uc4aCZ",
  "key17": "2gXAwbrWoNLL43mGrDHCNReTj4dkuPjXX4HSmmQPsupVaHbBY9WfGmpYj2xvwJ5DLDhpp4KwNTpJ3C2andHvVgWx",
  "key18": "21nso8EsjyyuBL6DRE7qhDupBYrHUKVpKzFzWmWumxX76mkMWqruuxdsNEZjZuTNDPTX9KRXGf3uiN45yL7oyioH",
  "key19": "2y6pTJ9sVF5h1orKwM4TL6zkCRXkYceDScx7hQW7g7eTGV3GTD6kay4mzjFiSChxqTNT9TCiKpRpc8ARPY1vUwFW",
  "key20": "o3ESVHYeMftNB41jgCfpXdBAbW3dtbS7vw1xkJfdWHVi4w5rw6CfvJVgTsYqCD59V3fMALA84ZPnyMHAzgchQ9h",
  "key21": "pgPt3LrgoBnu3gHtcxSKGM24mdPwHPsJFrsb861Zg2BFKT2qbG63jfqVBsYCXVeLZzF8PAEH6TR5mbJkpZUgBZT",
  "key22": "2DCaGyADVJdvYLE9u7QWKUcdtvt6gbJHvifRcUyYVZWAdmzCGcps6nvjckUzYMwMQnjJwYo2Rfnm7L8y1RiGFd3x",
  "key23": "qjfikmKexHc7h1Ktoas5WxtDWQgSfJ29CahBuYhBnXu9CkvopVZynTaba939mWGmXsioz1mENF4otNVYHZGLzcA",
  "key24": "3DrTbTtg6neyWJX8hEC1y85EcY8QKmeuGrftNpJNZNGtHCBKDwABqT4oHugRTgwBNEjdVF5XDegAsBcJWC7kmi3S",
  "key25": "3DbwYYHkdGeXVj5ysj2HgAFiQVdhVLrK4hCK3KfDB4EwZa6vuJPM5ht29doSCoJGrB2yF6Vn4aNq9fZbuquGcpEn"
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
