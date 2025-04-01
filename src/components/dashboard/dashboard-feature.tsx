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
    "2WTdot57m9KxM7fLiiSeo54AB9HRmCENP6VqgwibiCDtqGeLBUW736yytcKtv3oHBMPAFMEJpVAPwQ9PBcHzdxYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rd8YgAHRFnbhdwvo1Lwm9gXyWPoafzBDR9Ee2FWxcf83Voipav242VzPDsZPd6LpzpUJhcij5vA9Fgvi2AjD35u",
  "key1": "4d3qz3eqhNjsqRY6ChLS7kQNcinHUsBS6v6ubet69FdN32S1W65x8oYXi3qiQZTyyQ9cfnN1uhEnAAGUgGkeZ3d6",
  "key2": "4YmgtdUfCm1yp5sLcTa5nmbV29cEQ6zU96LBLU9TEqEz4arjNB8wvRNBEV8eeSsTkTHcVBj7dpLT3KARbmRw3CHF",
  "key3": "7gmmWVTKnznW8vqYHpp7HrE2CRoFgcegoh4VXRiuvYBcpUioEAR23TKhZD3eVfqxG63BSkMKrKwRhXoHtg8ueeK",
  "key4": "4RFtJQikTvTEQE3Fkz8GUd23pCZJB7q19k9wXHz65eD3LrSGrSceqqbDPjCVRgn8qzCsibr6PdFUcR31scazYDkf",
  "key5": "3MFuDhEbG23z2pESUcu34ebbSGVxRHn8BBLghNeZzk5kMW3rvHu2t5gzFtTrLbpZD1zhTMNsFESiQZEfYLhzvxRg",
  "key6": "2dQ762WUd6QL7K1p9H2BaftJPhSt3aVJapgA7gNQUtcFx2R9mUT9VMtS72irpw6EX9MSfJDP42gcYonkZQtPP66y",
  "key7": "5hpVhB9E1vkspHADQWZA6XJoNEf4mRvN6ZjNERF5JAXPy6fBFFc1JTEV1ah1oF7AoPdBuDkmn5XRTTFTs6dJi72x",
  "key8": "5xxYBHjMqjtwkit62zsj6zAjVCw6WyAKQN7EyLgvRy7eyZf3tGPD9jnMhPXnWHdMyZLuiKMVYNUqYVee1Tey9fsv",
  "key9": "2ha8kwGqgoGmFrtmpz3Lhg2nZG4iq1gTGNEzUiyxYcxsQss7bphsST3EDyKJGh6ukRRdraFA3XkrZWLiibp3hK7W",
  "key10": "3Mmw52jLWjN9HCbACqeD5F4BW8quzYc5UrRB4ews8c2wAVG3qCCu3Kx9e67nZsGQxAS2NADaDrogdrXQ1dtoF1eH",
  "key11": "42mxMkuzQBJDTErcesh1dayfX8M22NCPAycivLERqixrThY2Anq4ebnhfEzbeKxHzcMgndRXD6aSm9jsFEsCP395",
  "key12": "5f5jpmGDzAwFemjEdvn56Vwok56RhwVs88H2Vs1Sw9nvuguZSqBoFJav6mACK4LMAVqNod9wgXbnk6Te4ynbz4Sv",
  "key13": "5VfP6Ed4ap2fssS6wfzX1tYn9vKw6mX5MFTRMaYv1MxKG25TEUq1NgdzRmn8yixeNwYaqFMY9e7tTpfYW12W69Uy",
  "key14": "5xRmqhYGYv2DNg6bdwEX3X6EgG7x5GAYW6Ae6wopufPCZE6YtT7L1U5YwnCtBmMgYcysSiwSUUhy2Kb38h573xZy",
  "key15": "4TZZFPm72KJMBfM4EqWxBqS4tT3Mmvu7YXAZJMnovfvWWR4zu7sMBr7n7BG43Zp1YEZraMrHX6i1kerV5cBRD7Tz",
  "key16": "gnxke4LPGhnmBMPN3mZ2SJAk8FNo4c5xTJ1bnYnbKFdYsZCKA3BYhrrWnqzGt9e6kuPbQQWVTUzcCqfPG7rtEPE",
  "key17": "4hoKoQYEq4bNxtL6AFeMGdtr3Gu4iGNhtAY5svZrvWVLXbdqvj8u37ifPnZ1TBf419gnE7vAkMhLFWNAupT4FkGs",
  "key18": "66pGGg8ptfkcsz5TnoRcRLMaAnA8mFQkiM9xKzQY91xNuMqbRKL5QJCskpmrKA8aSfBo7hF4oA3xwBBu6vQSXWDn",
  "key19": "54uapJKZSAaYeuELiGFWMRS4pREsSShfiKv9QnGKURykX1nuEh3D7WR6qkfFkEZFVfWvLrfGFksvPZqGLEXDi6oK",
  "key20": "ehx7Btjip5uh9ATsskKD3Vv4M1vDpE2ELvz8iEcnfaLV9zUschUTezP2CfLXMEM712ewtWH8QEiZD2cAjdp6PMc",
  "key21": "5sZtGRNCsykCtpgrs2YuaYsBxYGDMZbGoZaeJ27ibPo4pfAFaAwfqxXcyv22osxEDCSZQSjoNYwcAqT3EYUpSDsx",
  "key22": "52JsjE5qbzp1nLRoJ26nSXNasgoTsAqiSTurdXn7s5FF1LQPNcuz62PgkzYAcHQNM84RaaVHi7UUqjUN8aEpXr4v",
  "key23": "4B8oEDuBZturxBKvChMZghBAaJjdErk25C9MWNs7CYY21jPjfmZiHtoEv1M1mYBkfW6EXzi7tdVGn13N9RKA41qT",
  "key24": "3EKXbZrDmYxfQFqffFZc9xVPd9Mdesd9bh4yHuNZY2ACSCAUAfn3ZXt48jeSWMxVhmwPb7vvBcCFDDqNT5qH7SJT",
  "key25": "4pLTjn1u6RnBg8p5Uiw95HmDipEStVyaA4U5zv3SNSyLPmy8pWSFxqkzkQ3X2RP4i1KZ2xsh5CN5R3rMHGi8UWcw",
  "key26": "2xkw4U5Etr7fJzBHnH35NVyUK3HF6fyPe1XCkxLyo2BcnnMsQrMP5yk2LskvYZXo7HVGV6rpTPiW5uqr2xVwEWd6",
  "key27": "5BSeNDWa1s2uUzCEtdfHEpq13WqNZYbguYP7A5s7pPVtEu4ov5Hwpp7ebHNqvMHjHGicmF4S2Et2GA1qQsLUriiq",
  "key28": "29iCoXoKvCBhEiDt5yVjPqutvYW1azM9Z9t6cEVWKZgmF6KTwc8v9wdBShH5yqTd1gGQFLmDib7vyz2FeVp8yFHd",
  "key29": "4B52f65yBqapPK4dEsAUt1dtnRenk4RGw4KaR6uymXVScyDNFNUsSp9fhhMGLgfgk8i9VzndDYzyCXEE1Yte8gda",
  "key30": "2goAEgCfNYRnvNczsRYaWjQpuuWSU1XNuDxqLUD3qZpP1hquwFjaaRC9qQSZ4wiyV1HhzSkn8mSAFpAK1ZqfjVBh",
  "key31": "2gRBK3YfSv2BUjVJoU3Xjr65daMHKigDx7W9DQfy7gjkkSAjMamnVrcoyMqzmVvz9wVmdX1pWgJQogC5xBJGrB2V",
  "key32": "TiBWKW2jGbYw7M4ZUv69A4QPNGL2Jio4ezdDSuV1hCrLx8aR9s9mJnK8U5kWLXnwBnWzF8z7BhhNMpwcqKEY6Qp",
  "key33": "3VcH51zhJ3n5BMn3fzTjU4a9pNhgsMkDpUJEsW46uMFzxAgZSERPuhjLSTyWfBzByhJStWFXNGC3khiGo5JraGU9",
  "key34": "5vQsGHrC1W8vLmTNPGuNsHJArN7vfEswSvKvWAHHFP5hoJ8Yi3R4sJHsF7rBPXPqPv3oVhqEXDGXQkqG3r4GkuaE",
  "key35": "3XpuqYqqtmTkpph7kQtLx14jzshibknc8eSkSenPHmuGs9DBk214NoSqZsxy6iE4dLJcbqbkeAo1Q2qstjEpjZby",
  "key36": "4kF3wgKgt5qPivWrSaXK9dZWHsQxXLDQnKd3BYCaq43eV57xMVfgsWD4Mmp2CFV5EtmKBPaUwWpMhfy3aJ9nh8wi",
  "key37": "T65Xm8HpJuFvNHKRYm3Zt2SRmV1NwpTyKmKKAnGVpEvkzJ4Sb6xRBdCX1z3gxek4KBqVWyWYD4iB3EsCxqdFziN",
  "key38": "2y4TqK7tgcxz9NbmWkhxE8dzDjZaVd1A3beQ3FZ3mumjbs25JtBaWrHHgLCyArHXmNTV2uvFxkATMWqECBbNuuaV",
  "key39": "uA4sswJG7qjNTewFDzDjAcqq9JVrtgth4sFbNo6X239No9sxG4zt2Fhf3eXjNq8st5E5nJs8ojZmk4dAG4VacSp",
  "key40": "2bFCtRxjtpvXMdwos7oLpGGnX8mqPrq2Gjk4PuRH3ctsTDau245dCaS6bUPwPBKGCzegu98dAyTw52eDBEwVAmxX",
  "key41": "3k7f2DyHspNtvLoC5SRoaZKVCpVzRXDxrQUh7XXQjdRjdDgSapCPmwnsVZSk9ygcAtxLMc7sb6Ydwwym8SFSizDU"
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
