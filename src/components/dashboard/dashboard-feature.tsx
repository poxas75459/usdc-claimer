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
    "57p3aYksfmPkCwwyrE5ZeiTAiJna3MEBCPJ9kr6fc9ZYeb9Zqn37cPpPGjnpbG3ECsM1GPrKfTyJETNDCbf2ygKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aGWqjyRBgFcq8EtJSzHpbFcuAECZ9ZNSSUTyLjAGy5w8mcaq1ztY1feR4RNNcBv83Gg9Lp1qnTkeCjRozbbEWqE",
  "key1": "3iciQsAzkew9jE2wQG6znvq9g3EXhQD9EPehwpXY4akZHXXRhXrsXL4rp8yd1UMVoNpLw1utw5M6kM6faHdh9j6Q",
  "key2": "3xzzGHkTGT3QKGdaEmSE2LMk49kjwScf5JVPsVVcf4XWu6YVPUw8VhVz3sTS9u8aLo3HPU6r9N8hhoMtZn3MbtrK",
  "key3": "fVrbJvbcEx93Tb6oVhokhxqjqGdvLEmsXGznUmdxAb2DceFoqh9M6Zra3kw68tMWMymofmH6sTbrbCtZzcQJQe3",
  "key4": "5cYgRXFvnKmAGrRgTuQstwZvqjwFVc64iwoaF8CRWbZ9mCe5qz84TwHRWCHqrGyhPHa5bhMszE54iEQqw625v6eu",
  "key5": "36t7ViRjv3wyNuWBzSTupr18nuaow7MGPTzfdokPKnhddCjxvtZVMuxHSTBR95qJzmwB213nKBs5vCtiUQMjksJt",
  "key6": "5VR9fpPGP99ntHj28VcZEHKuXFBe646fmSGLdmZtNKA9unCDptagvuib4A8tDZ63Bmd8JpnE6BX8yrsgq6SGpay9",
  "key7": "3wKHpitTDfc38Hk5pghtFsXmfP4m8BVMftFJkWRbrtTprZraPqoMD5VTPRWkcSysmF4xXZPDgkyEGM34b3HAWw1K",
  "key8": "67NR8byLdh3tiAGTD5QqY3JFS1PrM18MKX5etYd1Unyr2axj5hcaecTr27bGcTuHLerGHPFrdZsBos6sud9rGSi",
  "key9": "4giXCSvbuyEUuutJUwhXnrmBHeb8SqBrN7iYm6v7qHairp6EpFRcS536xv25RPCZUeE5CfZw5Wb4KqtfNPGiLDnS",
  "key10": "3tikYBEfeihSzQghjNnpYXar4APtfqeKaZ3sehwLLMkUJR25zjNJkMt5K7pkYxBEAJAkAt4BTMe3nQtBr26uAQTB",
  "key11": "cPt1U4VH2azabfyw6vHx2p72cD1BhuCLMgHgQnjrAfP8LssGF4RjibGjSwaLuoWec6ADjQLbNoAH6XUs9D3EbfP",
  "key12": "4tLLZBVmirCjCHUzKBhcd2pqtQCuav3vNTbHNTcxBXLr9FSwFDNo3i4AJ4TUo6GujZa66zJhPraU2CQ9C4irKq2P",
  "key13": "3PEX6EBbBSxnu9iUE5XTvB6nRYRkQ5SFjgxJRCr7zAqLPKfdodWXSPgdrgPVXtLh3U5suJEEDZBZDBVUq1SuZeno",
  "key14": "ASWbvyK2Hj5EdySQFEDs6zd9AhnPYAjN8m41QWpnMmSpGHQLMDain6zExCVUUJueY8fc4ymc65RHmVJdQV434eS",
  "key15": "S4LsZe3Mmyo5Kshby7oLEktpBNkPw2iNJ8nD3WZGzm9BdY1ZhLgGB6vXLaTRJ2BEEuEJBtf1Q6wDU2WoYBbiUL7",
  "key16": "9j7uVcUd9RPv7ThQ8bboXpvdKpeJUnvaqJSkF4Lod7g6HSefAjv6V9veFBz6sksFNGPUiC6HRRMjLdfUY9ABepM",
  "key17": "61ucikZysvKDRK7BA4kejwQjyFxd1rTFEB8CKrXvRkhLTui6Xf5WpX8ApMCPuBfxekRbzZb75QMSPYw2ViSqAHbJ",
  "key18": "51QbDyhQe68QKLog7hD1gFZeCmTnzbuhvW3py3t7q5xgtpPKuJuWMZrxLvW8uv9Z1BSg4bCEo9U6NU2hJKvgyzdo",
  "key19": "5Ty5mU3Y1oySkwEvom33AMdi6HspCdYCnb5WXCevAkTogt8D7rSbAkkS63ENsGumUXeocSBraAy2pCLW1qfQKGTq",
  "key20": "65FyP6qVPEx7CPPDJyER97rh7uqhw7aV48s3WhHLwfMeLnJrT7iKULxWbEL5J16qvGh5johjWjotDi9X6XUyz1Ji",
  "key21": "4jaonHfF5868jRBtx84UaHhmFCxH3Z23VQ14CMqQmT1CPpAbAeEyeq9NHLXuWdHDfpv5ou8NvqQkYT7qvHjDBCGd",
  "key22": "5tKj1xhpKu1tSSQ2STBbBTXfWtpe1sC2HJeFGXDR2HCb776jk4vTFTAegH3ZdCvTzVECGMVYN2uP8FJhJUVe9vdg",
  "key23": "2tUoBUDcJ3imjzJCgswhkMomT59G16Tvjv52YBs4cyt797nAkcLD7rLiFhGuWpznoe3G6MX2bUXWF2W3YQyqBU19",
  "key24": "qS8DqPqpfAXJrG7yUpsXPQjLYuUBnin7U9AsECWL6CLvzmbrV1Pmm346cvQqJyj5iWYu8FHR7QGiGDwHEQMkJ7N",
  "key25": "RKTpHof6CoeGaPfD4Jtp3ZD5xwXoijncfcb7DAD63zNPPci2FZDFSFfxZHS2jp8TF1pMYw6sWW5rg3qfTHzZ4Me",
  "key26": "4VCHY9J58EpvfGat4XMaWVsrfqoKXe6683FDmo4TWQYBqFLYdsr93VReWWCW3QU9rsExjUYToej4Nau21mpJAq3Z",
  "key27": "2A3LZidkwXxSRRaTrpJcBs1xkG5tg2MGar7RdKEKqLhWhJiGdm7s5XZBToW2g5i8wJZhAaDsWDRpwHuBcmd3HM12",
  "key28": "oTBcQjBJatnUfC63Uq53fCsqqHXPgrisrmK1kpGs9DxSon9nHpiP3vyDcjRGAV6E2g7iWfCUSLbUQuHKZtKxCnj",
  "key29": "3dNfVk462HSMCYysbvbg1sEQQhyUiuqxspnGqBkF8gTCoc6vbmCoHTLFGwrvdV2orKVtcaCV2cV6mijjU9qMh7MZ",
  "key30": "5VJbtEr8gVmEMDaAfx9cF2ymg89V3QwthTHgnrioFg3Ekd33XHyjocjraQS48EqLauhoHFnsLRHCjfeAtGHDMHWW",
  "key31": "2hbbEYM2ThVWgaj4w9BG44y3peNYhKa7nQujtBKTQ1V5VUhLpqekmiyVPTfHUrRFEP1XgwdoSkzSaR82UkEB2vnB",
  "key32": "2zhJ5ZjuoYNTcWvE4bmswJcKr6X6zQ9yrf4KtsLtd5unAgEdmgCqDzqWaQ33GFkNZoTmMs8fhexFUoSJ6gfuEt3A",
  "key33": "2p3YtpkNjUba6L1VsQMydkoQV4AbSLQ51PEAdgX7sxv7Z1sDMTQmX3Fxb2sy617ZK6zpcz2JKb1zY8Pf6bWCwYVE",
  "key34": "5dR7G4AGTKVChuvcjVJAVVcoMph5yA5ahXaCe43mczGxyYitg3nbVAPTo5zqB6Mq7sSQ3suW34fGrCcXRCk3uZ4R",
  "key35": "3GwZccSxGJpxUBVCED78ehBQT44862ptEreessi9z861XWRxT6wdhwcCL1nz9QqhdLgZXHM7pWFJZDoHx5MHyj4w",
  "key36": "4qYFZUAnabWmvMv3rKg8wMGcbPEfZZE1FJVE9PK6n66C3gxjtnJYLiaiJmnxXcDYcmY6Kc9j2j6YuqjBDHpK7JyP",
  "key37": "4Uv71z5SdwDUiKN9aXKT7jRiDoDrEVJHFcCjoJza8FZsGLevPCTmVhSyumUEkGnc24GeA19QKVzqtieJhcAUnMT1",
  "key38": "41kYqy1tbhioPqR9csQnQJWxcXNyk4pBSohMzBADbHY9DmtV2TXL98stL8Bx9apoJUAuDhpjY7mXpnNP9e4d8K5t",
  "key39": "AAkSQqcsNZaUvHEbVfAActnniFzqzvZWWjYfPk4oWiarpr3K9G2V3nVnd1EFL6G9uymPrZD7MHyG9dPCwAcM58f"
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
