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
    "2ywL7XTcnQcaVc4rjtwPVfeNEq7gY4BnQUoLJEkmDJMTVKmzz1E169DZsKGjvTLBhKwErCCJRT45sbgTRBkGyDJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YEdMZDrE6WQrXQPmra8wocnp6ZquXXmUAqDF8E1rB4Xz1AhgJwNHUpMHteRX52oix5VwsGS1895ZQAjaer5v9NQ",
  "key1": "3ymU6MmAySRKFT6a9NR19yyYFoKkGMUTFcDHWDkx7VAN7wB4uf5FuHrteC3azsaNJtEf4mxXBnGrsT1A3VXV6Qda",
  "key2": "4xHmb7EdEWwu5uM4eEmNWDkbAoRrcgw8DaVxBKvFgEQPugsLjCdcZZYFZ2uyaaotWv6MeieYVcpci1VjCjyFYM9e",
  "key3": "rZHTkruwTa7H7m5QJX2evRKpU7EznueCptC47Pze4xdXrcSjeL7gPRnPYhTRFgRHn9H4S9HqZ5YiryqSjMwLiKY",
  "key4": "zUAHVN16bHrSPbbG1TGyP5XUrgxTG7BsXTB4nAVem7yQzJE4wAyeCTBzZB7f3jhbNkxcWgdxu3yVBQmk1V17wyC",
  "key5": "2QyA4MHcSeHau4RYVLSGmMaU3FYdRvyrWtcCHRbYrRYd5Gim8myRPDmA3ov6pGnQj91xbD3cLLjuyoZLiuTyUZrh",
  "key6": "F19ocM467b2za7H37GZrXKvF1Vj5PqXLeUJA3d7X4YHJeNgcow5Vg3vZyxKCUKgTY4iRRkCoqDVqLDMToMvs1VM",
  "key7": "2vbBZvbREqtQb2YfY2vDYZEEk9gpiE7o7JCzCBu2hQ6UiCwBdS9kHQZg4KHq2nTF96A6rFjgFZocoCqi2JAcNjSs",
  "key8": "62HXkCN8zMGSquaCCuHxcxoU4uZ1Mzbd13QdsRSjH2SuH4gVt6WqQhUWb7nFSgGS1vVgLD8rfSgNa5tWrC2jYzVH",
  "key9": "5Rn26H5b64KwAMfiLAtuzyvJH3haNVfEYpV5R3rNyAdopqZ5cLVxkBVTa3AGuhNRDuuCre8sYATgGGMfjYouUyNA",
  "key10": "4KGwaJ6496FQrRfWF5mDPnYvSkwi3RZr3aJdQ2gs9jHFW4ktTejTN7JLcSpvaDhqNk5PakEiapgZKma3ZzKiVBXw",
  "key11": "38P97Ge2vr5NqKSuH98LwSNBESfd9oqcN5rkhZMguBe3UmtonbcLixgGRsCTKiw948uUcDBjXwHxLHkHRsEGfEbq",
  "key12": "3mteBYZLJZcmByUp1qpx6sUR5mLFCx6yhF4YoNBGnSdbECT1wfRpe8zzHevX2bzZkeXpw3QnN3BRncRdiNchKbSZ",
  "key13": "4ifSnpawfxvPbdrdLp3w4NCB3ktyp7UPSjgnWfCiip1pmzuYLFAu1dxrTbC4BPdyAPSjnr5qAyxikUPSphvziwtU",
  "key14": "5AYHuzWoCxap2ZfHmWjs3tF7v6nYrAUKTmFAYtoKReeCWnsDiTpN69Htn6NnLeVWES71WA7r4HmwsskUZnENrhNm",
  "key15": "QwLV2MhpCP3jG85CNiEtZDq7QAdbqAhkqoRepQgWB71KQ9eEh7VkgqAf2d9mwbj2b3b9B5j1c4qcp4q9mZp9RcH",
  "key16": "4jrYry4KSNQecSrJkjiupdSUhAf2a1artiGuGqJ6jvf4XBmfBdSZAeuTrSWXZ6x478sSzkp7fpY7zoTK96tsVPKC",
  "key17": "3BgRZpCfnEfXD8vdV5UjFQY1yeLTt4C7SUXHvvbR4Fe8cJHptpfNyoifu38QEd7cDSEuXkuR21VJqGYAbm8VtcHg",
  "key18": "3UTYisiuBEh8K3zxSmNXtDCZLpRtQsZSx8hteZsNyyX61YciQKZUnwmwyYe2da1zKByt2fFZFfGEoNGnUJ69GtRy",
  "key19": "TAHRmH8BvM7uqKS1auRgHAymdmVPVQLmeE84v7oTDBdKsCCUvtykJRC58dpyUx7sxfxGbxu76y19AARHJZWb2uS",
  "key20": "3qmXkVfC4KeJaByiBJ3mfTA8dZ4ecT72a6VQFyhkUrAFmMAWGMDBTmR87v4LgPn2gVebDScWTUrSsjzhWnn6Xv6z",
  "key21": "2pLWzVQwYay3pC4YcJLCeJmWbVYVE23nQ5r4hFP6ecLDE2DsyvgXg28RxwczXv1wkQ6Yhy62xgYn3aZyBQrSPZJJ",
  "key22": "4XAiUTkvuGXbSRWWM8yMs1VW1m3K5FmwJBfDRACdmf8QugvmUoNHvqP1CVBcKXBNkEEik8WUEFbB9gSLNPsie2bE",
  "key23": "2tMY7qiXhCArFyM4XhNcMxKnDyvxzTF6vMLKRQnQDtgR78SyHx258VxYh1m3jV4wGFCjfR1Gz8ZPTFPxR8McWkmN",
  "key24": "21C5uaFkZM5fmP2wvbfw3HZTt79PhiomuFjChwtUuMfGJtjw3QuxgqmNPGWWScBYjKKKArD2CnACeM1CcuU67N4j",
  "key25": "hiihbLAvUrHTpkgrL3qjDdmYyzmC9gNw6NbdvCG2Cu5Ys4CF2p3nQ7A1bqUHrKqakasQvsP6zU9WEczqEeABsjJ",
  "key26": "4jYayXKSzmjB9k52vFfhuwz6ZkS4dhzpxLHVM9DE3L15D6m7xVryJxbJhx3tbbs6PURRvYTCQtKCAFbGoLXCg4bx",
  "key27": "gsMdFUUDUdmsYi6KSzdfXhBRMtMdnhJ5eVHDPRwZ7d3YGVajiqduSVW7n8XHs6gbs9YLL818KVJB3b1GSJqAphC",
  "key28": "3agLFuj5kCoY8JM3sWic7JvyRCdKs94wKFG4Teqk1zQ58Qv57CHhLcQPHVwAoyyvuTy1coNv1KzpZPanM3WTRhMx",
  "key29": "4zWf71Z6RLSjbcWMHZL4uicLN6HV1hzuuhZeNeGEYSRodyCamfdZ52pooxMnHbdcCitsQKMWsHL5tawfUJUet6y5",
  "key30": "RkCuHYwcqN8KSobt8z7jQTCfhcmhXnqLpUos35cWgCF9hcWJX4nSRbnkJccLPyy9DbkCnCcQKfniSj4cPViKH6t",
  "key31": "RZChZ2QwZtmVDaoeUrcV3Ug9ywPBNQQjR29URkFj9cPeCKyiPPsJ2p5ztBFwRy2oLJpkSNYT7M7Tf8PtnNMEMaK",
  "key32": "5i58ood6ucz7zHpJ8e5XY1JHq4xVwCGdg8dM8WyHvwDU9yVnQnzrC13hA2gE4L11Xg4wMETXLuEzTHJKnRXRPEbC",
  "key33": "VBjyedaVkUqoGTPR5xBAg5PioG1KfNmiAJz3EUWqRJUjrZjsKBHWwUbaM2CTdRwrWsCB5BWCP4KVJJELh7BW57S",
  "key34": "5gexnXWvvpoBVMoa2fQu7doi3N2asHtRAzTKmKWDCtm8ykV3cb1FsW8Rb19RGcXpfHjJn44ek4vMPKnuKtfMLSuY",
  "key35": "45ChZALZ822WqFkxhakHqzfzW2xGTUSapK485oSKXnpFEHJFgu9HC2BXXS38FG6Jwz1P3Us3Bk4WeMuu3Zu2nv6g",
  "key36": "YzWqZT3uuMDrHVe7NUUQpFh7ZZtHhDyK7ZWhG9mDqyD87A16buwYEMJ4bDsG6932KCKDTnGde4z7exP4ZginnD8",
  "key37": "2aHUM1V3zzymD1QMYsVqyPGRfParf2zMTcgbAxfVjYjN5QWfkMxEr9ET2ukabtzW8sFAqpVXrE5dm3a78fY5CGYS",
  "key38": "2dEuSngweNQ2ZaGMoUu4Jjq4oMMyqTkjspUu4mALiZ9tV1zKqXsHFykrmSFsNVQqT4X6S4YzjJ3appmpBgtwsobp",
  "key39": "q7Q3wWAkVZKkMqhohYVLDF7tJxbjqXjqCsa2hDWwNbE9y6ucid85SGgAdE6cA6i4qkqpGdjMuDyXsuc54FrAvGA",
  "key40": "5EZyjHyYTXdDX33cWDMLrwNoGG7wbwfVMrqbttgA97dyUWpkfAv2keR9QsRcpUMdSmgeBqeMSykie9abzGaknSp7",
  "key41": "GguW79xBHgmgA1VVALqynr29WJhkAMo1bXzsEdGyh47dzDbVUKRgqFy7kkkqR1C5DYUjKoF8AmveMjgots4oyYu",
  "key42": "2aNeMJupuSxSfFkf95DgUwMnykhWBQa3FmwbgvTSrpuuB9ZbQCtaS4mTQbNzXHf9fQ8TQS986anZaxnxSB2mEZW6",
  "key43": "35jR19a4a6QcNNxr5APQ6jVSWmvBzSfqQAkkDpggv8Ka4ErL3eyA3A8Sw9j6Tj4vQbWUVvM9YLxPnSUrRJaPEXTw",
  "key44": "25XGBSjgP3Y9ai4fAztCLnoCKySdeFJfJqXiQtTyE4j2D2aENmTHbeuy5bu2CARzo9i8epPkuMczsjYfvZ9rBN8Y",
  "key45": "122b2MgcC5tZyuHnL73PgBEeKRhuKDEe6kMSt4jd4hg3pLMGcm18gDg3pBjCDRrLf1uC63MvRkAf1vK5Y5Kb5q6n",
  "key46": "5BdFuXtFou1XN4zLKyr8CAQx7c97ybSF9bATaakC4EGnayQzQZ2WgkrKWfZzwVAjgpAC9GfPkEBeB4xy849e3aej"
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
