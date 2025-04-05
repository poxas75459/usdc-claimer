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
    "i9px9cQ46dKvUGGTR5f6PWPnzNrTJMskVpG1PmAEne6VHiEmdFfQGrqrKhHmwruJjUZz336sNNUDT7NbKzAiA7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wrUcQdLEbG3GQ7VyM9gC9yrjaw4dH4rShaZnazzu6671nz9YnKkJ1bF6m1CPjZBFH382MQteAPubeYjERzgXX15",
  "key1": "4B2N2aRVATViuUNJc9BcFNQYR3fK4xU8USydANzfaZ3rJAZ5LbwhqAFfa7mMF2WCqA2s2sxwjXfgcLScYLzMd6WE",
  "key2": "4zcsBmZeLzDsnSjUetEt9r7SgqNT96shZw3SxUbJG6nxxTb7ptVLoSRkoU5Mruuf1JE7QUx9yfhkebjWgqJ4unbM",
  "key3": "2p9FYTUfBzZRy7QE8KqYvQkkh3tCg1o2Qrmyy4WTZuVBvXxuYSwgkFMDsymDshV2857rDfyZye2HJDyF7bAF9VMA",
  "key4": "2qA5FzQQ9b64ro1uwgijshSv8WTDjUwHBt25YAjgE39dmxHnvDpgy22HdxdGaZn6LjEx9S6N73WYfkCxCVSCGp35",
  "key5": "2aAKmM3wxLxekSfWdvMxsq3XtuYt4EbFjNzWdG1YcCKaBk6L6m46PSKtrQr9UjTuFE5uGUJJ3wU9DFh1Di23HdbD",
  "key6": "FV3xdenSJMG2AhFrpfnv2AUM2Mm5Nx2A7iySkMP52zvAKAp1ZvsFL6hbNiHtg8wtXcH6RXiehZs1Xf5tAx7oQ1e",
  "key7": "3vqJTiGWSz7o1SFazckbBMjUgX2ivA3fhwyJ2GheTaqiDBzRn8jgffqKYyrpZmF4T2Zp4VxHkSrktJHLsHoKi3c1",
  "key8": "QC3z9Lamp8uYLn1oCkGJZmYkuFR7goU8kiG5f5d47DTDXp16qJjCgoxrqhBQdEzVPVyHyAi9YASecjPNCXjapA2",
  "key9": "ujjjwfzS5bv82cvWqnYhtYs9GBhefRCG6oHJYp74aBHo21aL8wLJg9fN3KLMDMDgL7mcj8dRfC13bvkqRP1X28Q",
  "key10": "55pygoFu4HkTT8UTVCt4YSJSSWdQNBGDKSy4nNEQJtssSG7TaEEKETfMC4ayRkqDmPS7Uo5YDzrCJRvqM92cey6a",
  "key11": "2oGW1u8yb9ibMmtFrwc1QeUwahz3QHyjqWizkeZ1F5kjqRbQREjc1W8ufsgcg5cMXYTRZjXF6nqd48cehmtpqynm",
  "key12": "2ig6nysuTr72HG7g691Y9tkJCfFMnoFAZJWKpYocSsMeRm5RTUPpC4fsbiTusZhUxYZDLJ9bq332d6vWSa6E1gDe",
  "key13": "4uUifqTeDrknWsjLreM3fXyXptx8oPUmCmUGyGLa68PdApFuf9i1z1aXBvVfHh2cNp8TqQrYH9pTCxFjkJxzVxFw",
  "key14": "5r4wNNDWteGQpj8Nxh24KmyBCQg5kHvaNJrqQXKo1KKuEXCN9T1yMqhMAbRgTfhumxPXmQTxy3hy1sDfLh1nGXxc",
  "key15": "VMYvi7CrW6yx9HhdQ2JLdUFs4bUD3yEKp3F8L2mBdLrmzwAsyxF4o67UpAw7WgRvdfkQXTb9Bpybece2PgW5AjC",
  "key16": "4k7sEJhWrKYKNXpJe8kJt8XiC6qWuwbCjGM6bKt4WSXdDFbFqBEqfrCNdzxU2GScVf6hWbCtBzopJW3Pb28wifv6",
  "key17": "25AZtqffGcd6iDgvrSjUkkwLU2n66Ynqa1DotmChob1hhRyC3BU8JVH5XSuhwMJEo9ayDwy41aAe87oqdfsM11s8",
  "key18": "5tVTbDTsG3LoDciXrc9L9oDsALBjN5PcT3eDPvz6yJRn4BnDXNymmZNXkwA2UeFAW5wzJtVgfQGuepqicATB9eah",
  "key19": "2pE1zp1GwyvNX2N83YioPmqGHAXkRFP5Rv8HcHqzbJVgzpj69hK14VDVjQ5YcCu9hSo89FzvKSyFxu1rwmu1h7zF",
  "key20": "219BREENomas8UDfSxceCEEJXBMdxNvYzkqko4jgz5CQ1MvaxVEoHNwkKvUUzomew1qzn4JpC2LjEAQC26N9V8Rb",
  "key21": "3sWGAX57kDxirJcVPDrpGpfgA3RptTzxNZ8UeWKwWTQwPgMdywXpEVtCYVASYCC9Tohc2wXKkVjGRcDzPMypd6kL",
  "key22": "QEyjQYJ1qPCB6SgesFExJD2i5uncJjucvBUfYvCemsbPjqrKGssf1eQb3FfaW2qux8AD2qSnpikFcVwCBFR9BqM",
  "key23": "5oxLoCxakg4zTyfrA1nGvmqNoXviEq6oyMkUGXsZT6WvKmoCX4MiXqVrvr5XUBmksVycUmGTgTosHvudS6PrwrEQ",
  "key24": "mB65k7XCceQptKQmmcKDmhpfunrjuiYoh3P5hBpcHReZTnC6wTcrFma4nzkka6qKtYmuMiS1XMqWCvMYt8MqP1k",
  "key25": "64ZtoMQXUTAqA4c9hV2ZqHHFM5Lfc9Pk3y3go3TxWne7wcyFzZKJhPMcphFcicNsZDebGjDBinFFyYn9JBJzechG",
  "key26": "5MK8ssaPGJck2KbiT39WrGuViPhPaFozLcJWrs5ZSpKCWTjgmZirS9cL6FHqqEn4vUhT9QDetsNAC6PqtKw4sQER",
  "key27": "EwtmnxUyLFF7AcieREKeNbAAgqfcNQhD1MVXCUkp61BAYafQWyT6CdrhefwxgSJpbVY44riLJ1mAX3BpRSnqtYv",
  "key28": "23mfUaQHBnz95CZDbNs6eJxk4cXw5iEr7JzGwVgPasopAPH5nVKC9Aw78ij1xNqWCCmBuWzATcNJBfKqvAjuvjmd",
  "key29": "3GoDh3sNAc3QTLkaapMAMhrsTeMakBnz1Rj3Df8DXni7ByVrCWE6fiu6cTLfQFr2tXSGD38jXvigkW7y24zN2ANW",
  "key30": "ta4T9cHT12hHQrrFXZN8wP7w5wf7kHoM1vchAYr1TGpSk3YozaRMu2wCFfgVpZCcDgJ1taqpCLvfv5qReMYmE3c",
  "key31": "3zfGDHzXmzTECn1qEFZDGzy5Mmg5cy8gdsajGmw75ghWdNHUWR4mBCz1NZmZybF1uvBV89ELJsXCEALk9ogCxaUP",
  "key32": "2rHm4XiTrdXhHH1dFTA3YFTG6fNHA8sbdvPzzr6kjSs96aGx8dgWiriLehV9gNKNRvGEJCJWFFD4HyjAiYPSHjPr",
  "key33": "43vR4LJGgRAMCkomD6CafZooQfPU5CRx7j6EyrpCtQkv9D2z9mBWWCjnUzjmdoVAzEZ2K1t6LJYcLsuremo5AkV3",
  "key34": "2nhMHwszbdBsNTcSUZNYnACVb3qMbMv7J7o6hTBRCWFP3KmwfCabeRHdeN3g99XhHPsajEF6qcj6ap6Xs3DLtnyU",
  "key35": "2RiFAPn55fuPpKtnCWBT3yHs2ZwB8dhAtKTLh1tssETkiBoxboJahLV7Jr6wLm4VEiBV1GJYZyZGdHbUDJhoHrPh",
  "key36": "3kMgVW5xff1wDgF4Dc1AadiRRzFa1awQZL4b3R7aBi7ziba8zHDEt8aRu4oXdTv8rNmPGoZGiNAEdupYTQptYMcE",
  "key37": "5g8GQcd5FsBxSo11GesV37uHhPcjhuXNnuLxxzfXDFG3bHDG1WtcFX9kFsZFk8SDeW2dWwmWLto4WpA1YYSaBfm7",
  "key38": "5X37XK8JLHZeGewpmausVmFuZ4ynJC6ePMF5MbHqRZfuB8jJoTnhD2Uc6tcHh3B7BQmL3cYiqLVhuB8fD28h3EGU",
  "key39": "2p5QfDPFsiPuTEbxTVHdR22iP7sB5zVGsS7C9Jkyv14BjSRbCssasEK4JwPQEEyX8dtbfSfZVHkJrf3t2vCVC3RR",
  "key40": "3XKPhXDgkJgveKLmN1aecvjDGGDeBmWpwGAFpd4eXpHvED6GZnR8eCLpqHPwdJKzyGjMj5GfU7nrKQBVEmuSg9po",
  "key41": "2MKH7NtcNN8RGFDWLXy8QdtYhqCnQRFpAqZqsShknD61DWyWxkGpZseLtntZZcfuZuML1dGgVH4uFspisRRGWaTt",
  "key42": "5mxdnAdxrfcQsZi6TiTimdzmRwfsG4jWN6avnLpcArZ6xoLjuQ94Xod9TUFymx4WTFj8cExBfW5Dz719BXJB5pyA",
  "key43": "NnMWfQ2FuLVtzEdWWr3YCu5bipoJrWHK1wENpWuWedfEyv8ExXbQBVnD1C5cnQcCxog6A33R75C27c7RTDt471G",
  "key44": "2GbWqCW1Hd7Dr6FKouq2AcG7sfdnE9UZW14VWuWHt4i497K91UfnHZmaheTMku9jaHhK2WFwSLdjq4KnCD7SH6oJ",
  "key45": "5yVtvUSabX5ASQqKqNtvfm6mhHEJLVrx9kapiEF8GBGrdsYpwqWj3XaCoS2hrHooSpRdzm1s9CG1f8G43AAQtn1W",
  "key46": "62JyNSnAoXU4WvwKzoM11C3tB6gT4YSg9D8yrapdMEx25gJUg2o3JWfjhA7eLFju2FAUUrKfQvoBvnQdwkBXsuis"
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
