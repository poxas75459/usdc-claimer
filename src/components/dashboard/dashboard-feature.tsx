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
    "3g6syNeHkwuuGaVNfcAb5ENHQKJYw9BNdMRJK95GbQP7yjdfYAimuqvd2pfKXZj6UcTnFTdiRGn4gTfNA6VfRL5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66j393GyQCuKcGc8MhW5hBy3YkTtzfw7hFubLVPtNCLFFLyzDhzktRGTggjPFyqxyn7gCZpT8RHXecVo5Vpibvfr",
  "key1": "34nm2zNUtmqdv1CR2WUw6Sdc9Q4LNek4so5SqTBqtKBEseLTBhn9CEhy2RQb1Wcpf1NiNSgWmFD8oXtJfn9sAEip",
  "key2": "FvdWQbgSxHiT87fcyhycM2iNuspph3w5t3vwMS6BFogDSL9me7GNaDW4jurEzsV6gcjgjRQy7vppLV8rMMgM5U8",
  "key3": "3Y5FhaEVdYPGfp82kmxj7f9eT1i8G2zpbxkE64cPWFVehk3KHDPD9mFKeo4tWgKE7KfVqmPRpzhYW1Wi1hfbrBWF",
  "key4": "52x6Fp2wCwcydY9VfGgtMuy5XiN5MwY7MGvY8KiGZdijvsN61DttZ1LiwLiNYUS2i7n8rDyZkFNFHYcKU6XZsYFf",
  "key5": "5cAmaLAvkT4DaHPg6VE7im9smTmTrtkAxy7zPrhfFi73iSUsHs3kuPQ7VcZ1ppyYntGEcE5epqsFeTdGYXEQPWFJ",
  "key6": "4ZsZxrbRcm67yQPhVX5hHr5ewWjRLuGD3fCSkTy2wbc9mfyFVALmkotrHEMrY4oQsqEXE6JXU3eZSg2v9UqTixgY",
  "key7": "5qqrVNt1TmXmUtXru4bYJLTWfKsquc8DJwh8TQT1NhAosTNfpkMie4hb6cJdy8LpurDiksCacTGQbRxEdWJW5ZoS",
  "key8": "VQ3gFS5bi5r6zuFdxfB3d7AKNRVEGzFW4BSADC43UMkLUUHfHXE7AYUDPvFrCkijC4ZDxueujHtPSfNbQsKsTDJ",
  "key9": "DEZYNRwMxYhL1ipsvdKydpwd6rQyJMzrfydK3gEnkkK3U1U6PTMMKrPVu9NzoAcX5PmHhSqMf2Qy4wYQ2wwQcTE",
  "key10": "3L2heYyyQHzxv1RZ34ammrVYwJz6YYaDrgbk1dBiNsaZ82RT8vHktMjMKVSBJ28JibVQaUh1YLyqKnBe3rECdNDP",
  "key11": "21WgZRmrHStsaJHE2ExQhRPGHpEaDZUe7GMd5xJhBfhoDxepw6PJVJHb3oFuFVXZzJ4AokuUcG9WNSzpFoaCGF9K",
  "key12": "5qULnYoM53igvSdZL3szjcEmeCCGtLPPngxb7eb7gRNRPU4Mq2vESnuTEAEa6JedHzKgs68wu3coW3aTpye8cExM",
  "key13": "2TAxpECoYkwgBDafazWcxfVzibJ4KSMxbn1WdG2FXMEhs7uFpUS1sGxutgt1Hf3nEfSu6ZyLxc3aTHmqA5w5aGXL",
  "key14": "31jZtM7FnyYYBXV5SBXvjXK2S5XsPGFRkyh7ESBiNPwfoXt8difA96CN3wqNmzR483g2fQJL3KJBXSXTg24uauYe",
  "key15": "dFcDQnLukZEP7FYU2Bh1FqigQAd7WKZiBH86gGoJco3hRxEJ6CKY5icBknpiy6bvak9pjiXp1fMz3KZh9E8gjjk",
  "key16": "5R2TKP3UFuCmP1aSCFqx2UPPVUnMLBPmoyR6vD19xVy3NY723zo1rG5VLbxxad4Wm7z9HvoEi5qBPcqxrQijTWBC",
  "key17": "EQPnGJ1XqJqYSYMSgPRAyt9imA4dVm9EBJogz6yV2T4YwAyznSdVMnUXAZ7Zh7z2k2zLk7woQFgAXMtSsviyhxA",
  "key18": "4oodBsLf5tGjm6DaLHyiG9pbDh1iTf4LVD1zFKEQXh3T6w1JK8aCmPkEKGgr8zLZNh9xXRyrAW1StsLLzpqy4d35",
  "key19": "iJDttTUVf8gPdN5y2LiinDp2qNxgkgFijgtwSxCzjuWLnj6xU2gcdyAjczZsHJ11vrjsJLWvzxMaGbqwVJPaSxq",
  "key20": "2FHSYLXcPCTXuPSaTZMLttC7Uj9aj1dAWUBE4kvXsqgCo2iVs9dA62JZVuqrWfcig8RpndTCNf2cS5p8CGoiiigV",
  "key21": "54JMrGatKJ3G1XVALMDDUmvLuFRD4g8rQcjnrik7wtEqE1eEQgfSe53X7yim9y84N2ecLhaBQHTRCYdq1E8Lgzvu",
  "key22": "2s8Uuion9RXcPEkAKMDeziBfMWh34YZ2Bk7mjpvKLfLf7XtF9KYquxoUsLhTEGUbHeymTDBJ2hfKcogMwDX8PG8v",
  "key23": "2gdjRxUKyZaSX7qfGQghjvbYeFxZewCKhERVoThTUPZ1VHpVVbJ2KaQyLFbaHRdo2xfPLjETiMbXQE6nrzxWmgUc",
  "key24": "55gb7PnfMrrJfG4pDbfAYTj4tf76jcepqPL1soxcrrcV5EfSDHq1YLp1Q21aN7qsdxeSE3gwFDnhCL8ArAfabhbM",
  "key25": "c4SfuimmszPjTLapNTJukg2debNrtvikGyEk2fiQR22EuLPtisNQEPoGhs5BJJavX8ZR2aRJY3VTX4uzT7Qa8XJ",
  "key26": "2czDgV6QfwFkCoX1i1osajPFF5SVzN51BreLo1tywS5bc3hmHYsJm866dyGgdKASy1LVYa8KACfY3sWoT9xooABJ",
  "key27": "5a1xZeFf6FXeUUWufgstAVuSptmkfYHPsNApKWcEJWgckh6bknPbmMjkRBoB8gbQjyhwBE52eNZZoFZvvtptuyw7",
  "key28": "5RTuwafgY78HzA6S1tiEBDdT6fiCPKg2ku2kCnipgoUPQnLHLUkbJK71L89cKS8grEHibiSx9Nw5pR8o8n3qdeg1",
  "key29": "2Me91ofToY7nKoiExNzr495891gLGSQDJqhUP4FSLGRLWw49oZKfqga1i7e22USVXCeNncAuSTmTJdSLecGThHLk",
  "key30": "5BY1zbwsnBz29BBboG8WoGG1MJ9ZdZvzNznzaffAGRPGTfxCSVfourU9rWYB6Uyz9F8LEr6StmkkGiPmetF5XVSU",
  "key31": "2JKHsYuVykG2RUZB2FMDDSXoY5j9svTxt8dvY9DTCTXySAz6vwwVLrYszDBwcpAuQFS5p5yFavTc1njWeHoqVuVD",
  "key32": "2kXuLSujbJuMNjCrLKDJLeZsKQru21YnpFWnT1UubAtYnDGPjdTZxj19LQijSTaiLUxH65TJabCRc3F7crBfYU1c",
  "key33": "2qGtW7SVuHdHaoEkEG1qD4bp8ym3e2oQvsfqpgZ86RHHXpy4cypKKdFKTq5iyevHgQfU75ghZsrwupAYZWPaB86X",
  "key34": "5L9MTZkXZ2eSgLaRiScUMitmn63rM7MV74saqsGHsnjA6A37MArhc8AddL1vG6yAfgYQmMKXCYpjoPFrYqnEMcJS",
  "key35": "5Q3SCrTDaYAXKMcXAF4MpPP48oxwJ7VZi4UthcGLpxD9ELr65MM41MSdbUpqSw2bmwmayiButC2zFDSjSsfVeTW6",
  "key36": "4tkpSn41CD2WVDJqxUJkhqimTckZeBwtbEH2kfMMPerREKgLw835iurkZRqFphThY3TcCEq12KhqSAiJ7pSSoYQR",
  "key37": "4JQqvjbYXQbn6NJ3Xr6BGNDHnLD2ZxTmkZ6SjXJ2jGo3Zb8a84zFiFHzmvKTMWU6qFRfGsoJRrjrqdpWRhy1fqpN"
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
