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
    "49m6BwKQAZ73ExAo6tz1xmMm6sZhLunvHjEFpJwcwaGi274cxDWWDY2nz5jY6gLbe3uwQ2xVnwwCHSV85J52bTHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nnNWZPrT3TK9dDDZkJqrJ8U6aMdgBqDZVnU78moq7hezXxxziAGTGM6vDrGQyJiGX8r1di2Zcw2vjwpDS9xzQFD",
  "key1": "3nLGK6Ac47ud7mqfjaYWmeDhtaTchD3dSuEuUH9PRBg4ZyndM94VEcDn6xL8NhxATvdXQcL49ZR2wWu9ztfB3kx1",
  "key2": "2iUDReBkBYxZDc8irefCPpbchsQCLPrs37rxyMSQmtQXi319pXen25AZwdTGXrpQHrMoMeVg1nWQDGNQ2HJp3k5Z",
  "key3": "5Q3L3YNx1b12jKrgGmpwGEVyCnPUVL1nVfwmErpv7yNJPFrcCVLNwnzym5ZDeVpnc7QDNrs6e5CNRh2x2mzQsL7k",
  "key4": "4uv74czevjN7V9xW7yJWEYpRVtwBLVBBToL1rdfrRo8biF2bEEjZp9MLcX1H5FnBVG97HgoWRD7gw1eq4MPeMnnY",
  "key5": "5fQoHakai1sPVpWF4nwPTpHVEhyML6trTu36StV3FuM8kzuqLFTP3BqTAXrncL8B9CZyoNN97BHdNmUJzNhAeX2",
  "key6": "q7nH7hCNamT1eSBxKpoK4DR5LsHX7RLocRcoSJWXpMTFFi6JJ5AWbK1ZdtJFfSdh2XWJwhuUA7x92Lx18zBCwVh",
  "key7": "4tAeoyaZs33oeFWgoZJbYxRv5UJHJX8EF6xNzgAAjcC6o39MmGN9VQztLLfJtZVrpDzuNHbSpvMztWsFejhKHf2q",
  "key8": "39T1cgXbQaQKH6oa8dXbiupbhkjaovhi8SSgW2Y15Zub8Tb6edg9oG6WbmACrMHrojY6TiFQRyujYXN8rv25SG3u",
  "key9": "4As1rvqCzSrhXk1dHZRZdbvt5BJLnnHtxLbXNsC84CbQy45QMgK7fxZK9uBwK7mTeWmmzbEoDFtGxQGHgPWhvBTt",
  "key10": "3EAGrWxRZmKajw8TZ8nmWhH4DhXStFxbE8s7uSYbtBxaWuEaEwQAUpMwdjisWCWtFGVbgCEAP8AmFQnhoUoNoNUY",
  "key11": "KW8QBhX4m3HuT84mVJgGyPGULRdPp2HBtJw4Bgr11c2Jd4BTmF81vxi2YnRqxMR2ZsQLx9XZMz93c9tQk5aPqs1",
  "key12": "3a7YXRGt6HFaS1eYKMbJEei36DUdxF6Q8kLC1q4Ajy5AgbR2v6HnRDQTtghdWe4CQFpEZeAh4ayTRCnz72NT2LZe",
  "key13": "5CRDkeH7d659mwTT48VTY6ydWi7Yo4wA7MyfQb78btVdyCJbWK6rcizd2qkqTXsZVYXC3FUkFBkqAnGe2E66CDNU",
  "key14": "4VrcLvJjrzbe44i7hBgqkAjg8rxJrvGp7FwfUe5x9GS2Xwg6qkDTLgDkNVFiB3MSYEy1sJTjtVYxEUXsqWTu28HU",
  "key15": "4ykeycWj2uzvHSuJLUuo8kGpSkPuoBHWGPzjfkTzm53yEZGQWQJXqTV4W3wLAxw5S4P4vL8bwzy4YgVxMKbYtZwD",
  "key16": "4qs3uLhWN92wT21ZfgBA4bSx2hgF71o2ZNoRWzvgHtnCVhnWGdwoLZvmGbxn51wMyefeMoiXV6qNodwVjd2bBEKA",
  "key17": "4eSa5dHjNDVitQSvVwxjtdVKT4PJzey6t6GDDRp1hx2tHJ22drfaufN7iLUjwPY6tmnc6N8rQbQCnZxE8ctGZrLE",
  "key18": "w2gz1JC6bHog7gKmLPUEWae3boJC2Nd8zGLAZpn4UrStBqBHoqmNMWsAG5V4Hi7rWBmo18ysRjRayJUBe1D62u1",
  "key19": "YhEpfdfFikUnj5BGXfkry1PvWPiKWRfjyLS65enGRp2fs1L614mZijdZjjbXQRQgKAHTvGYWvtGb3Aghram3S3d",
  "key20": "28RFv2Xcfsp5ffmo3ao9ssaH2GZDm8tuAWExD3teDRmP858ascPCySF92ue2tqEFQLykLxGG9ePeV9cAWeujnY2D",
  "key21": "28wWiywc7HHhPNCLNfZVyKtYZUUU86XuwgdzC6ZMx53ZrxLug2o9vxwrEMn5TtFiMJyANMBHXp7NW5vpLJN4Ebvq",
  "key22": "3eViDFHBbe3MYF8vNe9ZBEPNpj3DT1iokgUrte7ZbJA8HCHLLKufeHyWnfPbDuvgD5QStduY2EMatLhjdKB1X7uG",
  "key23": "2M542RL23DpHsZ8jzEswXPnqK9Rqw5o8MXMsbmubi6KdqvyxRRWFSS93AepDvfo1j6MPa2vsp8dtQ6AQHtpibVH5",
  "key24": "2c7ENgCSDAKr62jCASNgoggEQbU3EFtxVdjJpSTS9PL9W7ENXXTXBjgHn1TUi7e9qAgRd23i2CvtpJZM1J9jVkMV",
  "key25": "4r9iEe9Ad5Xd9ZmQERYqUjZijTV8Mde6NmPL7NFMPAj9fFCsL4fQpScniYVMMUrXvr8vTD3iWpNZNBie1bF7WJ8m",
  "key26": "5fe5bF8eQpcpKLSPgAxF9GeaRXvKU22tDSaT3J9pF9Gx2FNU1nCqnn86gVgSXP3WPRLNsG42iGaeDf92k7xHKodK",
  "key27": "2aGrP6xJ2Z3DM381w9pPAQYAxBL6BDrajdrQNWdm1MprogzTuAv7GXTExhVspTUUS7wVUzbmg11bRmMYCXLygHS3",
  "key28": "S3ZkQeFi7i9UwjfonwEe6E5bCYoeumUJXVkJaXaomER4rYkAtceLQ59WiMMwYBtnF6cXSqBHe93JkqofnrSpShX",
  "key29": "akwphZnHppAz7U9QnTzgPKNhABFTW7oRq36WpjSKPXkXaVpG4An4V8k4p4P4cC8VKec9r5iofgDxYbn4sN8veig",
  "key30": "43vp88MVjzP4aDgZuUPmQEMzuQmsxfd3mvXkiU6R3CPpQ84b6UdXgREXizP8hTFC8usrk6NvLiN4MyaJzFi6mM2H",
  "key31": "3ZeB7L9pozt9wKREemgG6iQuZ3BdGmgyQ9woLx77sHB9K7UGw46FvJ5fMBJqce73hrC1k2YmaZBYvg8zqVXCzA5K",
  "key32": "3G8wZ6uAaY4XgxnKhD4bQpSuxKEAfZEQm2MSHL8wjgB4CucWAfMDnBVh8MAThQ4gQNXcUcq7AKU8LGhoviv4xndZ",
  "key33": "5qxCxQex996qGiLmNinqZuaXDWjg1QRuQJVK5bjVS8ZkdWyNHjSG1pzaZhzhLto89Z9KfYVAtmshKSAW2gqwunME",
  "key34": "2dAs6N3cvzeh5yu7ydckDnAPVt2ULpV71sBKo1LaBBP1AdV1MUzhJMkSSNk5gVEaXhPy6P49hAAPfQ81xkcHWdVP",
  "key35": "4fMSrJuyCTpaEV2d8tComzYurUz8pr9UhtvJJ7H8KrB9uhNm9mQXXdcrBjKadLiSq7bZ3hBksjGk1rbbzVQbdFMj",
  "key36": "5MhdHQFiBMoE7i9nyL6PGeTwnhputSwm4FiDtY9iWyGskDnRGBGwKooaFhZrGZaWyKzpnBV4BmPnD5Rb74SvKPc3",
  "key37": "5pSw1XWbhn8Z1DoUa9Xhwu1ZJ2nqLqjSHRaS6o6SM4fKS8P6KQnTYGnG8Vi6iD6oPq1WhMxpjXErQ7BuJqzZdvre",
  "key38": "5NaF7mKJ3UtQso3utnBLaf24kn4R1R5truVxidRucWSTKUNJUXXGWQytCRpHnhPMnmGcA8pgej3WtGX3KXw1n6A1",
  "key39": "5VKDKpAfTbipAhxid49iPtVQwXRb96gPp1XxSsGeepfSaLgLaHTETTfhu5vtdtVQhPvGjBiC3AspTxNSYq1qEysW",
  "key40": "5Qv1weZiHLMK5Tddb4iYgpEnJuLk2K4BfBa1sxCjU6AdmPYom43Baf2J1xdW7v114oAr8P3ofgEFUAXsGAbEPNKP",
  "key41": "4XuuK7GEAY5WgHEXzGsNU3g3qUaU9zML3Dx5idxQzGF9aAgtSZLDTTKdvHdWbSmHSux9VdjgLz6fW9pbb9sxW1u3"
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
