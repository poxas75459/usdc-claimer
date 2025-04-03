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
    "2Hvm3ad8zohrySnGkrCHgAtG8wzxNkL5gSP3ZTgfNb2xkK6UFqaeeTSneJoacjoT8UxT72u4tahVJiTYkjvhqytx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "618zTGXJfsb4AuwJBWzZH9PsJ6j6vGmgLTyJeGLzuPJXL8osuqj7cvawrnWitFeTLCWYkgB3KbatiSKzpu4uHazC",
  "key1": "MykkoVMTwABruJBke3PA1czuLS8hqJqGepCN2VbPUmSfybTzLjSe57Zus7aGqLDkNfwDFLmBUqojn83udHbRMDS",
  "key2": "2Sfw2bPw1Haj9nNWCK8Q5h5g9PTHWojMXqVR4XMrEFVDVwUVhad6E93G1oLHQ7ru1JWXAQwf45Mzr5ZhopSN3uC7",
  "key3": "5SJ1cwXqkhsyuMKHz3D8E8mixStjvRcWxQWiFgwmhTTbqRzE7uyDki25ThmxM4fW72ZYFMe9Da7vPsR8FWqwKEvD",
  "key4": "2YniAdiTSWpybKAsN59NL84mtAffswwN4YCwYU7D61sCi1mnfsJMjnqhKfETqpj9irijeq48p86Kj9VnmA5N7FAe",
  "key5": "Q5yE2gFmb3EjBfhBt3DzVtdxTKvQMUgxK3PbWDHPVaB6zrvXHqsSHYcvGcpeD91JyeE9AMRVQuV8r39oV4XpKmZ",
  "key6": "4oCrHuGhtuiu6Q1P3kiBD9mGua9ET3s6qnB4EpDv9PBNpJ5FjUooM4mZULyKbHdv8QNJrHY54Y1qyWTnZP81UB65",
  "key7": "4AAjxCwJwbNPE31GVCdLKAdYfznc9U27QNkgssAGJe6sAmVY9UAq8G4YzX34GXQxfuteU1pKM1jQo9nWJgdGm2r3",
  "key8": "3oy8nhCbqsZyuNrTzRsQBCquQjMRXiEcGL6LAF3PDU3BgRQC6tFskWuSFeqcPn5g3CdxQ3QDVvWqxfAQZr8DBFCH",
  "key9": "5JvRGCR6NKRBwFErjdfpv8bqfKn8DnbcGmu3UxjRQpni1t5GxZ55TEdexP7TnQqKALC2w8PSE94rykrYFZZNLN66",
  "key10": "4ysd8SZH11P3truNjRuNCfAZZiMRJUM8mPrgFLufT6HApJABVaaEV6x4tDinxaLPAsSawutUuzEkjeDjBDAD41qo",
  "key11": "41qqbmkUw8RvVgwRQsWC4ogYQnX3NruKosT3G51rfVee4UXkgU7bJMF9UAtwgmztRseVMdzmVH7P8Zhp1Qpit7EV",
  "key12": "3SZ1UQWTJFAriJQqRuLonvmMaJArpsnDrZ434q9hiv9pgmrHVoWQQhLtSvBoM3TToDSGjyVrdK5UE4fqdknjLehQ",
  "key13": "2PqrURVUYa2s6p6bjYEWAk52daEXKXDVqemiAbSvACaWndsA6z5xaY3VPsrULz5XtxhyLZZn8a94QBG8inq8BzgB",
  "key14": "yvELStw2ZXoL2bVbVesqLc5nBacQLK7bdu5fhqMw4Y5LVB4qyrFMvjR9oCcbpFEwj9rmAZQ8D5Um9nQ4kcKCQRu",
  "key15": "3cJBAuNSJegvdqpDbkjLWsPZw4tYfUdzX2jex4bQnSkTdgYaw6GeCHsvqrUeFvuVgcPefwWZybJgv86WSH45hukY",
  "key16": "De2YVXwEg36ggQrm7QThz1eNuPgVK5C8d8TW2AiatWJnysuJXkT23D8WUUcbpJ4VEYRcyNvuagL6haXRSyJ3QZ3",
  "key17": "3iF2j7EUML4SAoYag2dysVD7zbPtsKyHtvSkN623mkeXVnABZXSmtRrbrXkdHRE9qpTq2mFK7CWVsaWYcMMPPSio",
  "key18": "3gCYfoC7kgEUmWbXxAHoATXqzjn4eaPY29ZNU6kCrtc23ctdhXcdAUTJHZKEvQ19QmPYsqecjTK1augxFaFiDseL",
  "key19": "45M1atgo35A9JRcWAr28WgXtqoPKwsbSLp74obGXm3w78fWbC8GWTnPUGHkTkQDWi71u1wcz6qXykf7Dn5aaztuh",
  "key20": "3pMLDxuyoYGVyF78sMJDoKyWdJgV1wqEMpNw2denkFguxqCdAzc9PDwCcUJikoWZ6uU4LxLH7avnUWepWxmVkePy",
  "key21": "4nYt6CxLx5PFUEq9bNAbFporn2mczSZGGFKCigUWVkxhiCrAy51YJDVzpmLzmwSp4mJQn7fG1fJxbEMmXfisEPTG",
  "key22": "26gwyuJvFSJ5fqbPK1wchL5DE6pPD7NSnCF3mDC8g5BQJt2Q9qRqCf2PKuZqzEBFHSxyEbPae42RotKzYJiwsLSg",
  "key23": "3ojMxrpym3CRGBarQXSQMC19zEss49NqeSkPueu18yWMT5C2gqF7AJryB9LHeQif8G5YVtmeE3ibJVXGX5gZcFnG",
  "key24": "2tKAJjuVZCZ9YGsQnvdfNtZ8zqzgZqJtzDbvcwc2tTGMfr32UudQu6U17ebNHra2iYsZ11VXGp4n3AVwx2kemzud",
  "key25": "3WE52jHzr5nyDP2VvrUkD6SEX1WzHmqiWHotFb98FesHtJFhp5PE9T2Bpgkrmr8WA874GiH9GkpQbEcDF2FTRkt1",
  "key26": "4PYXLocuZhiAzNmbKF6ASg99f6vV5gmWGruzLshDjXoh5hqAmDuiVPBR4xtejM23Qj9nvYewqQyKj5pZHqYeodSX",
  "key27": "25yDM4GCKxo81sN5PhckqgwP4wNTD2MzwGh9xTqiXnwgai7SZ5YaFUqAohacfr2SaMHsGFA2re1ys4JF8aeqAbhs",
  "key28": "2jGyMRhHbnpHz1RoyWDLxmnGbprkDMSrfDn5o9BvoKeQZAwKjddaysZNvkghK4HYryKQDJqnQUKQssWWoLszorTM",
  "key29": "5bGYzUGeqNf3oddzRxqgWyeVqmvzePgVmQQYXRishCev1rRZ3dJfXPsRsLL6frEjyUtkXJXpX48xFcJjmnPqQANY",
  "key30": "3zQqz5yMAGiaSNEE2UNEH9RmWDUXUcchCEv7YXbFaUW2EnZ7yqzzkz2yYfBRB1NS14wB1bkraGBUrQuwj4E3LW7E",
  "key31": "2daDdPxpgzB3E1YGpsyzjCGjdWcVLxC1Q9x8meAebWz7szTVBAzpVeEcgWSJWKSTtoaBPR6CeBY3aZKNoyMKYTMr",
  "key32": "3jd3crzkgHX4PDCFjo5NWGGGqVJmNRLghddry3smfhHrWVwwTXBgGha6CtywHK15KB7NECL48rpcs9Vn6wKhRT9",
  "key33": "2mz5Q9ipCyV9AK6vNZLwyMyBshfgtfkmyXWdaQzieivvgaHSsgcwYEzJqJGVJFx76H8VzdUr6TAjTahgmKjhaxzW"
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
