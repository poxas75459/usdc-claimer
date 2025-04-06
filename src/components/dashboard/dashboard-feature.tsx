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
    "Qk7kvnWUEFKnhWjy83ynGapvUvsaSMPuqGUuMWidqfYDQLcWByi1KYvmVSLRnKhodwALiEr8yx3HyUqnXjtavpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44HoAhTMSUUDEELBa5C2uyxWddANHsDP4tVGWNs2kmEhhyLVVRF3aP73eRcTAWUcT1iyU6YjHrw7UZGiWVAidi8d",
  "key1": "2j195xSdPZmM7WPvPp9RuuGrpN9vUViYgnTRvQh5nhCv729SezNMyLv4UWDrMHg6Fea9SUokKmdrD5gvVFUxX4LR",
  "key2": "4nSKFkewW7gJ3Fk9hxJm7JZibiZg2pYLYcfHoTpF1uwQ57dFhc5jSxBAj9TyeqWP4QuSwGEURsTr4pQwABZgM1Wu",
  "key3": "51RZYxMYksePvhRks84sQW1Ra5LGH8jVAbMn6vQev54rCwm3TbSB4JfvjKt4AZ17JTZfFojHZ4ZaG1R2J12izdVy",
  "key4": "5ayy8yV8zH9byVoDhB9rH4556U9nV2csaTE7mUkbFT36UVK2R2gZQrihSxiAonKsffFdz9RmsWgdbKpVwvWDQfaF",
  "key5": "xL463px9sSqK5QkRvHJF9ortYUNc6StK1CexB3Ky8jj8TuT2wtZh4VvbLmRZZmuk5RuUHeqzxFyHodBroyEYg5t",
  "key6": "2zmzt3ZtKGQbaNGNs2CpVSwwEsfB4A28hyQdxvGUkTcv9yQwGQ6eqQyBYbYtYt8SpnRj7MyCre1DXSsWKMccfr1d",
  "key7": "4FzhWRoEgs25cudwZpSPues3a4pTCr43HQ4gQTmPx3sfAGHAqSCX2Sg8cfsbbM5TQ56MgXv4nqcJayBLRd1zQmP1",
  "key8": "58yzfjAz8hFWuo1fJhnuCXEFyELpk6ReuTQxmEjhmxH9EWaWMNT8JABRmBoT7PPnUQ1F5Gwb4Fb7gE4RmbfgS3yY",
  "key9": "646aPrneDATGAhRwottdF2K8gPv7W9txzkpHXtxHPrLUc2zBN2w3d7wHcPfhPXBcpmqGDj3gC5PVLUFcN5eMhCfv",
  "key10": "2BopAAs8b9XEnS4855px2xqwfNHjk13Nq65A7NmtdhABn2bo5w5sWekUBtH39FdWie7fiLESVkkuJUwCMoGbKBdZ",
  "key11": "s43x79ZMt9z8RpCwFfxBRdM1r9oFYhvp4WvXjo4XfYNmcSyGAoKvzh9R1K6prznxYU6e366TAtBmbdw8WiN5fUA",
  "key12": "2X8AgPNTpc4MP9kw5bD9NmVSZgwiH7nNDm37aHAjgVyMV7Uw2Nwfios7Zy8c62B2WXiu4HzXxuUa1c67mfKXszXh",
  "key13": "5j1Pd4k8Drc82qzWcPWSa5tiksEKajjDviTQKJ7vrCDjfFV3qKoXFhfKSegJPuJhjk33rDkYuz6nA3rpjrKBp4oY",
  "key14": "5y8UfBfHQVtAjKVJxQJXdGmVmcaAW4BKLJDCAsisQWo4gJeHo2f9utkQRtRWCjQVkvUvijGS9DHBSChPWqCNPz56",
  "key15": "46VFxcamDkyo9UWRdCjuxAsKb2SyGgrn2LrcF5f87DVh4G56Yv2gL3qX7rNo8uFA3JLorshLL3HxvBXkTJPe6jYV",
  "key16": "3NC7WKYsh9YRBtcJy6kwHDJypHiSAC5iRpXD6AKkAUoS4f3GR46JoVR8dzsvHcC1rN4hNzvNNwec81sEcVeQzVTU",
  "key17": "29x545v5vAcdrX2oeiHfNKLbH6ivbGZ9Ct2Hib9PGw4j35h4mPvo52EsGrHoKzBJ2qr5pLpjykNdYzPGgHSAgVPW",
  "key18": "3N5w2yMu7WpJksfMWEyzTU2Rm7gpf9rDceACaVAfnWRHNMH3VoWz6MFJdh4L9AuCRix44fhj2jWhBtga118nojwQ",
  "key19": "EB1wKcq1F1reFQ7bXgy8zQ3TJtGtdgYbREvXHo3vQYc9iNaGaY9svesz2rhWjQ3oSZuxgtbqrm3beDsYRd2mThf",
  "key20": "3jKev9va94Hhchd3t85vNb5iQkzVocG4VLPasPW6WAkg8s5iZbdAVxJtHeJ2Zi33vxCaPRoqw9zUPVqL7p32uNhX",
  "key21": "2q4nrW4Ty8HL6AB2JrXcijYD95upPgfxJaZxHEeQyM9muwKbZzXWpoejxYqfQDFE5Y4eKnNayHb7CdGtmyyjekJA",
  "key22": "5oteLcgY75qZYyHaPdnX4WcCaTvDCv46634Y1A9xZNT8BjeRyJzGGXhxUmYpNFYpFqY4kMTUbtuJzdjSwcLSNn1H",
  "key23": "4E8RjgnLLQGwxPVSepEVnspxkZtrVUAGs99P51tAvGikXSYnY3BcyxLtMTYZ98xk99ji4qxcPxNkNuVwYMvpvuoY",
  "key24": "5Udh3bGQQ2baXTwJ6F7UYrkn7WNy12LJHqbx6UV5YzApreN7buzcFjWeq25ZkHrHQshk1joUBe98DJLJEBkDiGEz",
  "key25": "2JhAP4uMcd61TzwU7X1vsHLwaLz1XJA1FRarkQA4gYK1SGfrG59kcTeYWkSL1xX8Xi6S1Qhk81QhftEzqPx4o5nt",
  "key26": "25o6H3is8yoEME5Rubmnjsbmd74cPFyh94eTY5QEDMeTDYSfShCNNAUHMJkfi23jutXAKjs4j1ex6gMjFGTHKB1j",
  "key27": "3adFnAKD1GPweLJeLKicdabpdurMoqhYo2AWV1kVBk96AJj1btH4gWYLT22DJvSPGpND1HJjAeNAedVTJ2kEgq84",
  "key28": "2cnkMxJDjfQRtDZcUX5EnSGuESW7eUAzgZbXDcUouhsijtVe31hEaznfrti2uBSZY6jAcjySXq4fzTRYEm7yCH3D",
  "key29": "5trNsL7EgYybvEE5xJzdQ8wph2ppqaKiwGqwuzjuS3oifApN4RiD31kyDncLW6g7hynbv8QtbCe1zpAyU4FQJU3q",
  "key30": "2rSRwzzzYDUd8c2jiczordZF7TmucDsY5N3WqLAbs9wEoqCXDD7w5fSMvWvC51TP3YB16hPz9nuSvH7AuN3BiXDZ",
  "key31": "2GkFaDDWre8eo8Qdt8yZkKi7oyTfrZuB8EjgxAV1yDFq288MXN3xXT5LdrE9y7KEgpTbA1LHZQhuqvPCRaZcSquy",
  "key32": "62aFqSUGahoPLAwfxUUXp7XmMtpPnALKy2YsJgdi1ufY61KBjJYXosye1grooPjnR4EiDxV8Qum9WfprgisPukHs",
  "key33": "2cHpcAMMPCjaBySUycgQ7Fn1viNCtEtZZd41PHB8LWeYwLaTNuQNHyoTKj66GNZT57JSkqVcaGce7CbaADV1JWWi",
  "key34": "bNyasjMRNAZC78anrWKUPAe7WaFvnWZ7dszcwP1KTGbk3xFXSdPL2QtAusxvSqFcn2FMFsGWU5gKqyA4nM8mmvg",
  "key35": "5fN1ppUdR7gHvtwnWBLfik9neorZTkjGBwN8fzLaggnkSH7w2SGDKwAt53cuiyDSCBdntem38yAm58xo7QojyTiM",
  "key36": "3L1tMybWqefwPRuVQNwLDrJEViXqraVvGBdyjAho5TH4fdBzF5AnogAeLRv5DVKzVeGy3WBzUuNyAezwLSo52id7",
  "key37": "4ds95UhvNQESE9amXSNHwqpsD18g1AmjcXpH87VjghVKm3WuNPrTXbFxEAHSQBdKQzfrGtkdr2oEyZTa3cHYYEsL",
  "key38": "52GSPnirUsCe56XkaZ1drwbTnYRy1bh3etbXGaV76MzNhfKAotz48xLmzw1QdeiY6GHafaY3tJ1UwgB9EkGXrHQq",
  "key39": "YoqSQFv3qVN4wLM9XywDTdYojhoGypbQoxUiCcUmLXeex2iKH91jDFcSLjq1xFKz6tF3dHcDr3pad7yyGBSHpar",
  "key40": "ae8ByjFazSaRbZvVfThL3VzvBXBeoKf7CPepc4oLbbTjqvEy1kBZbYcm2nSDGNFzbihz7L8jH7TGGnRJmgCLwTX",
  "key41": "4pUmUVK21zMyfa7AfczSSCLNfBuKRAULoE873koWjGS3SwXzYbrwJKysNmu6vQvV6SSxsqTqq5R7ryz6TJMUhZxW",
  "key42": "4hrJf4r2F4hGFR5HEfyFgZtBGiN3djsoMyczY5618ZMCS11o2Uen3KE9KmmvirxAXnKAMq2ZpmY1d7xAyUFdP7MX",
  "key43": "QDBt4kxbSXGjTHHZ17uHWFw3rGbrsyrDPPt9avDd58NxCXFcWGf3MiWyynRss4B6b1k7ABXn4DASsNKwJxYbaPA",
  "key44": "2oeNiCU7a4cQgHVQkbAYoc1KrqntkLQwL5yToYDMCeebqr5d5DbFnuZSQvznzHhEWz5LorDYgQps6xq51fT5jCPP",
  "key45": "54Mv5mixJANS3T7PA6JTzYK4wMXhND5T6E4irzRWTgbKMnV75bLXxP5tBDGjMMUC4SURRb7g3WBppp1n98KKgJsP",
  "key46": "437QAA2RZvaYEjSnWzKNVuiuSY4fALN5b5ZKNsQhL433JqrLRHimx8LpAazA7hcBJfwT2G1H3X57Zphr6YwHhkhp",
  "key47": "4ZNTDGfc2PMwb3nYE8WpJmoYhzSPPAMAMmKJVqr5uAL43MMzmWEzeogDA94HXgjPkhngQqNgNimppZRdqsCGXzLL",
  "key48": "56pwDpJyZRhnwv7wseaix5ZyijY9ovUgK8mKZwCHmi5GtomKjbwJ2PqQb1aYLeQN1CR5P19Ktx8Ko6dR2V9EFBoJ",
  "key49": "4oLwqriBCPez2Tb9Uj1W9TzkexQuh3UkU2cX2DkYziGjKxcqK5UBNkwzABpMSEWSffDcggtrgRVZC7b59veAJhMW"
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
