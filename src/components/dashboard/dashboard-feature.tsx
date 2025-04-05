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
    "5HiAKCi7R77qhRaHBBjqk3Vvrv6UFYaUNNH8ixgpWk2hX4WU44QZrbSpJNmDy6puSA6TbM6rdSLwuSezbgXAVMvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22wjNwDgJFLfLHdSvkUgu2TdSJrboX9EY5Pg78DFQHaTcE7mT3KYgjY2QMXZqCVhzfVXJFhFghxHmswWcG97E2PX",
  "key1": "5U6kjAPGJTqtepJ961CaSpf9FoNSy3tLTZAUU1oHHa4sKRj88HWor4S1mwQTJTzbtN6CoBkD3BVmv3QabSxd3Ypa",
  "key2": "299wSaDHqzTBzW4xCppb5En1ncWrwVmjdatbhQGcQZ3QY8xtCNtqjUDJsfbW8iK56m1qL41ZteUpLSsFVpPcNDuw",
  "key3": "4hSFYov82EwopoG9bcfFHP479PuRX5ziSgEcVbAetk6KqyiDSuPKjJJMvYb4NpefP8EWYinjsBxDEmcw3kuRzt9R",
  "key4": "ECSdERj1xPdWC5nKnE12B2G9iH3H83fyi7TtdT46ecMfaw6R9wf9pWuxoMJEFZ9H6sPNG4s4JzbiU9WwGF17Gnb",
  "key5": "36XC9dknFCqVroHrctHTfQ3oz2hkLFDBUi61JqVGkQuoUMHoNG5kPArMyjLPhMuawCjVJgJwPhnCYZpcRQdM4eeX",
  "key6": "3UizKcmN2gwPEHQP2WEXcYUESCGvqNXwGEPAVpYKdU7Nj5L1zqTegfirkzPWLXyxRRLfxLNn7ihRkBRtS3coaqVQ",
  "key7": "2XVjatt15pcWdgAFtrsML69kGfSeHypPLhB74oNTQj5cmMxjPapewjA14GFrFtJ1rWed57ZDX6ub6kTZT6iV55d7",
  "key8": "3Uwu5Kvb2VEWfUZwr3gZS855xDdwNLFu6g4R4dvu8gXQP4vQxsuJkZ2RBPTmNz6AjLG74C7y4rrZD45KYGDrM2Vh",
  "key9": "5EET2iLYbZhWAM2vbP323EmjyNPGQP93sCKPM3ZUZyK2Thpbp7YWemg3Tnvz41RNHs5zKqtZHNjxJtunU91FMbM4",
  "key10": "4WU4BvSb4GUoyLSunn2gh1Yst1HwoLkCdeiFJdY7WXjUao8jErVy7hti48Z4WjjaV1L9eTMSxVsUfiAwmD6N8Sd1",
  "key11": "2HmnpUok432t6KUubtK4HvuYDYrnUmsVkGSGeL5AGUAJdVLNBQ2wyDxYHuBqDdksQr2W84T2FqNDStjiBuFokxro",
  "key12": "3EDbBFVPPyLPPec82UHr9jo3z9eNTbk4Y4x9sq7a96b3f3M24XFfWMFDahqcFn9irweip44MGu7ThJw684Th5SN",
  "key13": "3njXAJADmj9AaJDMSqmudA7bGaeVvYTUGu2TjGb2F2t5z29ifxm8eEcuHqxgNdEkBAFRdtTortTVV7sBrL4LwbHq",
  "key14": "4PH5GvgSiiPC2pu8hAvoSPzJY5pWNyfgGdiY9QjZYh8xG6S24zMoBBJY8QY9KCLYRqoiuKsKNSKrmgM2vKsHbiDP",
  "key15": "BuqjdWp9QeminkbJtqnv9Fyx9Hy2uau2XsWJyRzz1wPai4jfYeKdComeRymRn6g2d84sQZEa3DERx9Xkf2eXvKi",
  "key16": "5Ufg2D2gLTmjkoRW7P7jjAHcPi92KeZHnoJuS4g3y9tkZPLVGmvydTJYs8dXLZYoNXNwiiiP5mwK9RzGrgziVDzj",
  "key17": "5SwtLsxHCRB89PucPA8eLgaNFh6ppqBmxxrRea2bgRTM4bGXByi8ADgu1RKTfVZ1Hxax6JCffGPVMqSua62omgcb",
  "key18": "5z9ruKBZhtSCUD3vujXJumuFGSmtXfsVExSR89jeFphVd4tVtTtsfncQB33HdPT5ESoYXhHFcMs4rzie387ijj6a",
  "key19": "4pmj3nfwNfs6pvbPqLGeub75g7W552Rv27JWxjSuLYTpP7oAYjr4jqCVeytDuK6D1Zkb9r8teXdVLk2UYX9dVP4e",
  "key20": "Hnt4DUsEfARWaFMJYFHDtigv8Q1BDRQ4VvnCZj9xsQ7zXfjfV5KTtTb2HTeXm4XbvzwjXdPQ8HyfKPTFdpwYcai",
  "key21": "2Agz6FZUs7P4xBoHhewL1bQ4oRnkdKXzHq5aC1ZkpNU5anWbWmKkKEq2oK4oxq4XkjymrwtGhkD96sThfcPk7nWX",
  "key22": "58jVs1d8A6Uy6WXTPgBX4L3bRa4T79ccksZbPJ3ampC5PZ48fnrZL2fEb6ZoS5Qy3KcsFsuirAL2Lt9NGMxRL59c",
  "key23": "Q6BzvnKmzLFMftgt3vdSF7m7MSkqfrqLeMEAe4zpDA6o5MkNbFtVabn1aRrbKjEEenrhexscK4aVLeXq3wc7XZZ",
  "key24": "3FcRUsci5LYhBbftytLneuGxAZF6tkheBjPH95MMKqBiVJQuWYPzG8EJKhAooRsm1HEryVTam3HxRabeDdfhdquq",
  "key25": "2xMN7hpaangwfQVVmJYYstYPn3nEegSNx5ZzZFYa1x9cKywn9xYj4QTkp35eDgoQMCd7vLfxjsaC6CdrUP9fSKgx",
  "key26": "3jA6quMTZhQni8Ei6WPiBNuPyhs6S7kxQ8Xb5koiy1SYnMsrqTqKB8SxpouvWocrTuFwknd4FpM9fhdi3KcWfy21",
  "key27": "3uAsAjhkZnX7AcNTrs1Zwh6u53vC1mgAmHY9wPJUHwattLP39g1Hj1qVHb2udp6Soa6BVmHx6SVLaV1NNUFvGAdZ",
  "key28": "Tm3Kxunw4ULvbYqAnCZexh8TiEwpZHfmv1RTsEjgR9fsD27DoQFA1nrxgHio5qQLDemET3W1etzBVEhy58h9XwL",
  "key29": "3PoEPqzYeqTvkDfXXDhrW3HEXXkFxkV3KygTMiXKVV1k6QYvr6Ra2CeoAqiWbDc29fnLbCT5GVM1VMyueBmCaVbg",
  "key30": "5BVJ92JPwqjt6u3J2fsEcgxpw4ETKMN33TWQgdLJ6Lnx5NtV4Mcqf49YX9hrGzGFYY2QKp7GaKVh44nXXWzXchNv",
  "key31": "5j89K9DPMA8p9BM6rASn51HGMXfHHgkM45aTsYpJ4dzpzuxXJnvBuFufAWEUrfVssqEhu7zA7ezkSsMbrh3DTGQo",
  "key32": "tC6GgtuiZAFXDetwgj1Jo319451ZbERsVADU8CP4nvd2rbfgoo7PZbLX5n1UnNDjUubKHJBrbPQGY9tXpajQT5X",
  "key33": "49t3gg6mxhPPrRqxEYXLQnJdtn9dVPbqSyf2emZsiseQZgDqryHpBV9jhncLZKYChpwUmRq21kenwXMzzGoYrthP",
  "key34": "4rZvDaGr8nXSrm4QUKa8YdJRhVATTL1UPKTAjJi4hcvadcDh98yt6ZwQnfNnHc9WUmNESxSEmAH369desTcNSija",
  "key35": "376QUNenG3tDxQUXA8FY76ZszgiwCaXiKhLTTLLysFWoYkaHwU5c26pFxCqWt2ekyTDvnZWqjtMbiLh6ZYYnLDj",
  "key36": "65bGdNbx5qj4mnSJGtF1x8jq6uEBBBwxBjTtWMcSgCyfu6xzgD8io82KKwp2SAAZf4PbktCs9CKKXMM2Yj1kKBmf",
  "key37": "VQ2JonEcT4btWsaqkHdHHHgEztejCjLtdSXQms8TWLc9mfayX2pTQvA8WU66ep4wZLVfothcrm2gbuemTqN7tj2",
  "key38": "34rBMq98cSxczHLgwed8QvMJLtQfwaDMbhbszHZLU5jHkzDVuuVYJbD1iNWpymzydgystQxvyw5ru2saxwtdjD29",
  "key39": "2jaBTo7QqchnuJXJWkq4sWz4sgi3EYDrTCKgdEUGKqEdyo1gHH6c3oXWRF8KBznpMJ52EUifzd5Gt4rHZZXA9yFa",
  "key40": "h5LSfa5JEReBLrtWxMi3YgdYhZuNC3WQAj9Xv2JMMTEx51JigFPvthag6u67HY3K7KPrAWPM3LtsPx75mfqEzV6",
  "key41": "Aa6La7C5V1MLgoHV49BKdzdovexiwnBZj76jR9tPtUbcXfKZLWjLEnekrDRR2GmbVQKe1LW92BNYbdRLfYLz5rf",
  "key42": "3r7Ubt6Q4TMZEiyabUDbbnpbRs7dP84VyJyWBkyhPPceLswmMwLkbpD5mnXv1ZPTz1TkYkWxKj962qZCr8Acu1wu",
  "key43": "7aJsW9MHSVLuQNzcr5LfNebmbgmR5gR5h4wJLe7NVwgEstUN8F5M92ttMrwkr6oPJysbrvjiQoupb9xez2QRXdh"
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
