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
    "4s2M4j7iCpxr5bYdEj2GyP3wmn35nkgab26b2niZ8BBMHm3HohMJAkvCZcwEhGwWyZEGuDZpEVNdzL9ybzAAweQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fNqdd1G7gKYThkbvSC46xmcLcorC2ktQqrzXBMpYVnw1ZyGfv7AzYyPynmDPJ1vT8xAWuYJnj3Z3HybEs7o6Qpu",
  "key1": "21ngrRPoHqeSU8wcWjyFJApfBDWQ4fkJ4fc6X1Ap6wkd1iRCCmivDTys2N8DhLbaQftmVVAjMhpUveT6VtWrLndb",
  "key2": "2YFFSFmjD6btSuUrH7thnmZGeVM7abAfua67m36kaptX2mrcB8j9zfXiAfL73Mt83Ta5DuKH4JzRr5R8DWPtCfRf",
  "key3": "5Fx8uGgQLWjdCEftjFtPoKtGs3qGTQ9MKiQfgyk9hEzYR8asbdK3Du2GPLS22KZ3hmYd9BKaMyrdw95iRNzVw3EL",
  "key4": "RpJXA4r9kwDurixJgF4CufWN8FWR7VUwVRcePabgdvcDyxby8XaQUGgjsirrHKMdj2HGrbdbGRXAC5zD2TVrsR1",
  "key5": "Ae84WaTTo7mGfgjXtfCVEwhyfqnRzWgv3TyrhjbSZ7E9RhX6oPnjUeVfmx23rjmwbvxiJLfzBjCqcp1RoSmoeSH",
  "key6": "58VQVyr31YLXGLzGhDcqAtaw7DiQnwm2Tq3U5rJJeweEkEeHVsVdHeQC2HBBkWND5UwSY3EcooBb5Xh17ZtPygkN",
  "key7": "z7TGW41EX6U7GE9CCHSkwzAMm1U9pg8ykFMduWEyAE14PJjgjn1sBMYxCGQMvqT2joiYkTNpunqC6qQR4Q56ZHK",
  "key8": "3Luwxy2wt8rVAXzpi5xUTqEuSyF3KSKcPdFQGxH5HmVrCv2mWdxvwzxCbxPAYNAJ1Xki1Sho2HfQE7tWouPCW5zf",
  "key9": "4mGhfrmWAPYTvpDZxwVeqK7PkyAP4cjjRKZ22yD5pWcQ7uwC7B11ZdNM7krPjDqLMXsJ3bMBWgYoynQpiCmwwv7t",
  "key10": "3wLQNDxHXM5ruBmR3xrLVvvf35KwHZiTkMLpx5sUqV3gjtDdHxmRJxMAaxnMf9eA8JZWYPEB32PXVMwjYpvgt1hY",
  "key11": "4eVPqz7e2kWUE25gu1ABmfUgLN1BQcWPnqWYeNGaEFJNzUjB4NnTm1cHD4zfT6LCxGrkZcqbBtYmacBFSLLgR8xL",
  "key12": "38mtf9xdvxt1A4N3JH1uAq9ouEVmS7mJT42anjtUuiqSGycPGx8Rtz4Gzfo9eGKQADqvapSP8wKPBiekob4SEPi7",
  "key13": "4ZrX23Dd1m6DWQ4p24WGQjG6JdemyUjnitb22AJtxiV5uvrim4BDzc9qvMqKX7rpME4cJcENXLz2LpkWKmKitpjG",
  "key14": "4JJC8taMYkuy3NmLXQSTgvtam48n1HQNRi6V926jWihH8vw5GX4mtVHX9gZk5QZ3tDeTtzgWpHFPmSKBQzM836gm",
  "key15": "3Tk4dKoKQgL8CF4UVhDJeyLNLCRcf6G2AEzbtB3NxmMenNentZVjW7kvPBLHNfeqVnN29FdJRdgPXnC4c7ikdx2F",
  "key16": "j87wrUs2pvJn8b6eAMmFKn18yCaw8jDrpwS3iZLQWkkPjANGyitNaXZg9LiLufmGfmaHk1LoUQZQpXRrmPacQ3K",
  "key17": "3i2zsXUD8zp8QRDafH91MBQSbZ8ypwi1TBrzGQEf5gJ9pWW4gGxSgzZYDjXcTzFnxYg9MVrsGQonFNM6FoAwmuPP",
  "key18": "Lw5LhHy32JqJcar9KXKbyLKr7hrSisve3zcd1F7HxsYaY1pxw1XoHxtrwZhrWFDsEVo1GkGxjvq28YFB2meFXV4",
  "key19": "61tYMgzHjhb9b9s2xQ9Tj9p9S23ERgT9qn1zZWYvJcRGUmcPvNDWKpUd1Gy6RRBLrwQ7fQMkgAGwjN2fnUhLCPVP",
  "key20": "3LsrzKmV418uQdPsWuab78JmCAvbvtgfEWUUGqLpPZDAkXpnKFP9fSr9rxZ2Cd5d6gfKZMwBdmPgTF9Lgbue7kQX",
  "key21": "5iWxjWNWqhCFCjQ8ZYf9e2R67jJ3amx82ifum1WaSnguHWNuDVEjFTWihn2C3WK7hUeuLgBbAWM3x87UsAPzBZxK",
  "key22": "4Xn8N1DMEaRXGSNawueP3B5kkoSEbRRv8PF1UzqPRKFLbyNaNJDWkQh8ARYdX1zkPEb5UyQaRYwM26DCWvX9Q59U",
  "key23": "3zZB5eMbYk5udj6GrKub9ArGgA9mog4uLyRaEpzDnaDTdbC8wxRTtadRpguXxEEpduxbm1VNN1aJt57ZmuGVit9c",
  "key24": "RSPE6XgZDk97kYinDszwBP3wD7sjQtKjof262a198mbVFTiK6DA23tBBNJjeEsv2KEaRaKSuSaC4DFQxjmUhuRV",
  "key25": "55YZqH9y3hbJioCtdQHGZALVVji9aehuSXjcHnAtENMeJ2GF7jyKhruTXACRCDQszaadf8hgRJZoLmGp69wRNDEL",
  "key26": "ESya37mv7HhV9efm8zp6T71hwMStoHqP3qSSZH2kLhGhoUrbLHoWCKNGGGkaLpC38tk3SJkN7kVa4RJv5wbajkv",
  "key27": "3nKgaVBccn3sM2Yv9bhNMj5ZZTJK68pKLNjedzKzpd9PeU2WDcJXqcnSBKzhwxBR3tnoHsKAFeoQVWstsGoXc8qZ",
  "key28": "5b1VQ4V1v3ZKxjz81kdPW3NyZZcXgEp9ke7p827V5JVg6NYnCEQSJ1hJEW8KnzwK72AQouPRYou2bCvLe7EeutaD",
  "key29": "52Wo6iUvfAhTLptVr9J4ma7nu3ycSpYDKeMY13zk6kYidqnGDH8uQoXyBCe2KZeLGGk5TF3TmU31EP9LELTKNrg9",
  "key30": "4ywJNw4fQdQUuitZBL5WiV2dajfyUrwqD5zWafojj4f1gNGDQyjLbXZ75G5oPspzAzzqaPDC3RMpEgjvgmcZwzUo",
  "key31": "2GGBmo8qk5hifY9MWKmr7c6Vx4wBxgxSw5njt6hgrY8juwrXtTt3HADoEnaNdAvVASZGjsi8N7f1agAaBGuzYyAh",
  "key32": "5WGZNgdVR5VksZwDEKXSgjxgbYpyqhGdBafwYFTbFGypKFWxDWGnKViuJuJpLMc21uxPX76W92BQChgWZuiZW8Yp",
  "key33": "5YS3TQMcxzTZaR4BwXh1xPzooshVZjgkqzWzjQJyYkQqwG9ir8rrEYwCY34gN8A7MTsH6vKBBdXbbPNN9UuTQnEc",
  "key34": "2VRAVrnArz75KZksXMtWv26PzsWcqQfG8gKNAf9C8VgaDawvbDs9UfP8YsjUCWuMzgCEDsZdnKATBiBwifScZr1d",
  "key35": "WDNZ6D2xYECGetWPDhNC8TR6rsCXctwWogx1t7syPSF9PHu3wYtXUBmsEX6WzP5YefVU7xTH7T5vtcZNdV3pZ7a",
  "key36": "4MfvN7eua1VxCuAnhb9NiZW9ekgW9ksJ99skdjgyjf1TKfS6dF54uG9zn7NAgevcus4L5uBjXEWmRx5KHjz9AXaP",
  "key37": "5CRh8q4y443oifH7oFQshK72LTmuHR7Vm6jA6tEYXzWsPYXuAo1RaapyErJqgyxL5JzhAi1XdSQK4SDxRY8pkeC6",
  "key38": "1uZX4b44B3CAEmRbkhVQSEU2KjPUMSERMikuREdZFLg16xkpcLGnT7UrTkZxBkEecGRQN1vEf2nf9MF8Ui563N8",
  "key39": "3hbqCE671HBGs77S8NBF3ZFzpmZVd8WyrHfpH54CTrPqzy7USDEQf5Y4p28eTsQ6r9NqWfwkHAVcK14S3fSubAAk",
  "key40": "5umx2kBNcxBQ5GZNtSDBsK8oF6dndMNgYKu2FAxdCFiQk6MoeneLx1Qq718z3muWhEMCZqwjhadmmYw5D1T2DhCK",
  "key41": "48tNkjPWZ27Aoxz2DedQL3r4oNSUnQbu2VZDk6fqyo1HrD3xeTes9vDj5rxYfdzaSHzLQAnhTQJccTvT6uc91SsE",
  "key42": "3FCmxrxcsxt5djxCoj8t5VCyoUYgvuJMQQhEuLn3qBgfdA4bWPzmEL8PJWgKc22Jy9J1u7pKiEiPR5ZFJ2XRt2CK",
  "key43": "2y2nDJcWh8b3RoozWBaXM3Ji2oj4BSNisbf5HSB4sawwr1pCiE97GmgCDYPTx9fn2WAokZeDjT8Wjqf56Nkmdhvt",
  "key44": "4TWoeqBzBiCepseczBp4WGnnkS499Lo5uZ7uKH6cYtB3zVt4A8KNWiiarzELN5CCkdzULvu98hBVpxbsVPuSmiv5",
  "key45": "4RjMcM5ham9WR8inXf2SCJ7kHf5cKG2ADSwnn4RFuF6fAETdtHQ5rC5WKZvBHa69rejKpxSJ9g1731Ycwj8MQ7XR",
  "key46": "2REmUdhzVsMmtkcGwsDnR4MBneqwjt8XdLHVjskZ8HYAmQHJNFU4bdKoMN5HokQAFB8gWjKKkTCWwd5aAZmHvgvx",
  "key47": "gBd2u1n6omrhp62FdpD1syAVA5ANRkKHL4dZkR9WBUyFkZMYd2UHy5j5k3ZCMu2eMyjQ75tZQvjdwKHmvnkfFbG",
  "key48": "4bQuJjD7DeWwV4JQ1D8nJrBFhJNUanncM16oHiTZq7svAMAwA7hufSneWLHUS2Mj4iWY9ecDdQvUgdLSjYusuqG5",
  "key49": "5YDCrqxWLNcmK8GhirLvsv7R3UT9iRSf7Yyz2ur3VwjifYe1Uw2odgpEWiEyhC2JvUCM1vRx7AzBMFbpgnez7dco"
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
