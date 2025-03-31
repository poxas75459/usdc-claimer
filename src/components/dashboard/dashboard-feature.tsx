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
    "drUyhnMqSWqmLc5S3dS52tMxyAeEiR4x3z6mHaZB8GzCiZJNAoHn212DEL43ADwdwtc6RVTFkW1D62XLRpRCp5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ajXSR1pqU4okmdrXofrixHF8GJFYfCuErNHCXH5y1MzgKtrJNQxvBgBz6nsBCmLkiwcKBmNqvfcW338j1jQw37j",
  "key1": "3rBnsJyyJehD8Cx4MS3asd3drs2Uu2hVuT3fHffm9tTfU2LTUcu2HNTMna1BA5TLYso7C1xC8n4fKy3S89NPW82g",
  "key2": "5MSYT5dS6XVPyBNgtRCxBqW3Wnjqx37pGW6us7mPjfJm6adRdpX4cXJRhamY1JVTdWLoM4qYa4ez51sYwBHaLNf9",
  "key3": "38VRNU6f6Kh5yDFqeAgP3MajyWdV1r7RRtXb6QXt55mhKp7yTopJrc3R2ReLrCnCBRPXWMaJSudgtURbg23w65YU",
  "key4": "5cwJ52StZCswUKgEybUETA22YPmj4fnE3KnUnJHyFMsLozgdbEhbvr1GNtUXpDFeKrBYcAXf5i6VSLbVytvbrWtM",
  "key5": "3KJH4zf5khrNche5zTRMgqCFNUKsbssn4E8oJb7zU1TQK81c36m3en7oTt99izSUumj5gBTbA2ZpXkXVmv36f4Yr",
  "key6": "2A7aCbrfAMUoC9279fPZxoWAcbmX6SLsGnAyo2jC2i3CptFin2py9HaZ2cE2KMZ1ubHVK7PAkCCtejhYUkPe9XqD",
  "key7": "3AXBBca5drN74q9doCKKXEvjEdGYX3iJXcYifnS2qHVUWazktjaLhUowFG7qz88kuMbJ585ZC92rmUjQoJyB971m",
  "key8": "41yoKk4Dy13FPdtdh6iioo2HhDrsvcYabzibCVaZTFq4saLuzcbB8aVFqVd3Kx2uKq2btrdk8TwCiUFxS1fiBADc",
  "key9": "3yFeGrHp7LQh8XDMjKEpSRjYd7Yy6rNqW9zabLydSJ21Pd94PSx3QMmDp1j4iLu99anwPN8wCpDPfMahNbZ8DDuq",
  "key10": "QRVcTRgqWYwfHPd94yPckNkco2Ygn5EqTmo6ePvT7UG1XRiBhcVvE32stRDVK3qpf6qKRpTf8tSrJu7QdxAifQ4",
  "key11": "3sk8BnoKAfWyKKabHcskZdRVeDCRw5oimiqdFDSDnKXqCrR43oPEfJMxLsaM5ryEW8PXVBh9SbmG6Ebr3YovX9L1",
  "key12": "wiLE93cJMdXGLPr7pfdPRmpWeobuetZfft58QuXQzwnMeGdMcayNQbe8iWsUWYKzaCWDvah1uU6GEqPHDDQmZN6",
  "key13": "3cn8hfVG8gThvkxsiA4sPz8JA1parnQBPNaV7qrJsS4tQEvzFZEmWDos6DGi2pnJLZxTm9ovyyo5onLf4x24hEkQ",
  "key14": "H2jPMA758gsGCNYa7uKBNZztNWeimnHUxMU19gNG312MUuxADsj9m2abJiCuijTKhRkn54ZoKSFhDMBKauLFrSE",
  "key15": "4ywLHka8H5Gvhy913m6gJLCYFVm1CEmCHKBvVJozFhge7tAZybNWTpRenE1RSiZ7Y9T3b8Xh1dDsecHxo1szzDas",
  "key16": "jUSn7zkcU3ww3oGa7MPMe19zzctvSEDWcuGYPUTfpfRPFtWiNUT8wufBgYeuBXCh9TWiJvLLxzdARiQ7yYq2q7M",
  "key17": "kLhB9Z4AEe1Moi3gcsavp7sJezzUDa9GmMV6qkHytZJgw6u5qqcyUrJ3HR66eKmVE5TdqmyHnpJJq3k9SeCXmSc",
  "key18": "9b2X53DaE8sWzoGBHPppHWoRepPd9TYCpo5f7VTSeqBKB94DW9RUgNaDCa6crzARzntfaCPzXndQxLEaTQJZcHn",
  "key19": "2ea6Hd95igZU69Wd8exvZagAgm57uzGPGmNBwV1XQLzfVt9MN4NDkSd7mLkNWg6J8TdTe4nzJuX9MunqSD2qaXUM",
  "key20": "3Xi1GJBRTnEH17CdsSN2eocjwrjE2zv43kUreBPYmn1571WjbnkvswdwoDLNWFn5VrtnuRpqbA3sWCdnMVeewRpR",
  "key21": "5YdvsJC9DcqrBpgCFB4KrUVeHjzShbxpTSF5Q3KhkhHYbtie1rf61E5Fwe56T8hoPepYgh52fTfVYZV5MTqYVL7S",
  "key22": "3Zimox3HbqyQZqqHjwb13e96BJCCfJgcrZzLeKdp46J1bUkCXC2Nkt926KdTvn93h6CYczPzu3DnzMsPume6HFDp",
  "key23": "5d2dEgby8LQCAJB7NAi1YM7nHxQBcSeuz8VuTiv9NbD9gWrDBRyPS2bDP3ijT5GXsj3XVTPk4QcNHHZmP6uCZkYD",
  "key24": "3GNBWpoJgsxGWi7pv22HiSo4fMYE6CukrjVNgUHUi2yYwKwuB4kthZHDZfymrEdVWx4889sj4NM1kc9MuaLkLDLG",
  "key25": "5t6EjshAkYTvitaSm8aTvarZVW39YFHCXarptJ5xVdExqJTooGFnv3xyatbrRn2fHAXRP3G5PNXBeRfNaJfzhRc8",
  "key26": "3Z622zZJgWBXuwD7ed6Y4geUT7GAMRdBZb8NGEmRkGKHs61Pnz43FxT2rM8wuoHfGPSxqCXg6HtCSpFMGPToPioN",
  "key27": "2PNYLPvfBX2Vdhot9ZV3kLrBDCp8e9FPAsZ4bngZivxYX3hRQVzoyyEbbY6rLzHCqkzS6HpBiht3nB176PqZLmey",
  "key28": "29ErrCyxabUi5oiN1eDZVvzhnb6ATcDXguAMzFtnnqPAaqNT4GqWRZkuWFgYZ2UoXdFgvYhWd2CYVQ5r23uwwUUE",
  "key29": "4XjNMZFEhs47comhFDvJe2oKHRF6ME47akruw4LEn3no9StYQxAZUXJMdLkdQakF92CBu7ULpsgcgF3Dscnk2ASC",
  "key30": "5VkoE9ozeoxH2j5u8ZcLuEpUHGhoWtBFa83ga9RDFDRRtoxFjDEBuboyYk3gS7tAhdczuLqV2mX8BRwgajsTN8eZ",
  "key31": "bU3MD75aLzfGxDjTperkcBYheMen2BawygWuf8v2q5AhBVutagyNXsG82VMRy9LzePdwCFnPiCWsKfvrTqbeXg1",
  "key32": "3veSDHLK5skdF5T1UWExruQxcjZUFJVPzrzbWewjteofEnBE48nkEwFsKqH1or1RVYRPHJT1LG2894SgcYa9UvfH",
  "key33": "51axGCzBdCcSfiNhhT2Bani1Mh6pVV7LDgTs58bpEPkrV3seEdGoxaZpvSry5vRRMzn8B4qWXEMJDjjXeZDXioh4",
  "key34": "4RiqZVdNaCuWJEXdWjb4VoytHadqZ4QpP2D5zkdfDp7ehENDzmc1uyvgWMTuBP3cinBFEuh2jszZWXXcS1yqq9fm",
  "key35": "5p5LQnTzpz9sR5k7xVWarBdaCbzBzUTobceyUAF1p4njbX5K9JWRmwZRmKEGsZ8rdLUC4AtAQccrdojUXWfNK8LV",
  "key36": "DxcNrjgZCKKvwcwPoaShTho7vW5PL8M4yfRUJoTqqV9hu1gy1qfVCch3kLKCFgb216YokGyxkD9ncKNntyHsV7u",
  "key37": "AacwoDZVpfnneZZatvQxVFo9zQqxRhB2Qhdm7h94pNhLwfYn9gwVWkAMV5MPVJnTt2msWYGijvpyZ5a5QbbicCZ",
  "key38": "3cQbiU9k2AjUYDt7QPpxGGwXsBdHEFcDxMRf9ZQQJATdF7xGfB2PGVsBHTjVzokovi2R2iP31kEg1VUM81SJojJh",
  "key39": "qS1NrZ1REA8erKPWu2GMJHZeQngLG8tejL1XkKaZnKEbr5KjNkjtx87DHJbZXp16TpgF8M6oKByPP12zFmP24on",
  "key40": "DZ4cbCHUs3zRXwpQDznZwE8kem8ZAF62vDsiiXAvDfGeaTpuQXQLQ3i4ti1tHZWD9krPj3KeiWKg57nxDW7Uvfv",
  "key41": "4NEtCg9EfYgD4mKNcSMfEaZA694sYPXyN2mzdfE1dJ4w2uR5kNaTAsNnXPMHN5WDmtNU3TAyp19K6h1LqezJQPwS",
  "key42": "3fx7MJG98Q1v2ogXVEjQTHXvffKKLpmBKQZeskx7z7mwNUdh9yZ32NqaMzJb3kY8umBbWqtCcEsjFMcRSNYgWTXY",
  "key43": "2uVXCDtSvfSbyds9zvwk8sPknubHVE3jZgvDt3emhw9VCtwzHTZU9QiGUe9na7D5b4BothhwRGnxswBwasbdncvK",
  "key44": "65NVsjaRqr2GB2AAPX2GmG6TGY5cu9oFdSjCGgJznAAppre7Xhws2d4dXUwuxtgThpdCSohaAKzSG66eHUY2V9gm",
  "key45": "GVHBZ3qFXthhBqdHT6PXnw7hPnWqQgUuSAeLvFyfijoRmJ1bmTck8Lyb9v7j8UUAsud57QJoknTqGyhheZnebbN"
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
